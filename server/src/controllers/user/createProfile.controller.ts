import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { HttpStatus } from "../../util/httpStatus";
import { authService } from "../services/authServices";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createUser_UseCase, getUserByEmail_UseCase },
  } = dependencies;

  const createProfile = async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      // console.log(req.body.phone);
      // console.log(userData)
      userData.email = userData.email.toLowerCase();
      const isExistingEmail = await getUserByEmail_UseCase(
        dependencies
      ).execute(userData.email);

      if (isExistingEmail) {
        return res.status(HttpStatus.CONFLICT).json({
          success: false,
          message: "email already exist",
          data: isExistingEmail,
        });
      }
      userData.password = await authService.encryptPassword(userData.password);

      const newUserData = await createUser_UseCase(dependencies).execute(
        userData
      );

      if (!newUserData) {
        throw new Error("error in function excutions");
      }

      res.json(newUserData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return createProfile;
};
