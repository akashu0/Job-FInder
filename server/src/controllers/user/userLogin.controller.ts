import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { HttpStatus } from "../../util/httpStatus";
import { authService } from "../services/authServices";
import { log } from "console";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getUserByEmail_UseCase },
  } = dependencies;

  const userLogin = async (req: Request, res: Response) => {
    try {
      const ip = req.ip;
      const userData = req.body;

      userData.email = userData.email.toLowerCase();

      const isExistingUser = await getUserByEmail_UseCase(dependencies).execute(
        userData.email
      );

      if (!isExistingUser) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "User not found",
        });
      }

      const isPasswordCorrect = await authService.comparePassword(
        userData.password,
        isExistingUser.password
      );
      if (!isPasswordCorrect) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "Email and password is incorrect",
        });
      }

      const payload = isExistingUser.id;

      const token = authService.generatetoken({ id: payload, role: "user" });

      res.json({
        success: true,
        message: "login successfull",
        data: isExistingUser,
        token: token,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return userLogin;
};
