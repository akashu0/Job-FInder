import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { HttpStatus } from "../../util/httpStatus";
import { authService } from "../services/authServices";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getRecruiterByEmail_UseCase },
  } = dependencies;

  const recruiterLogin = async (req: Request, res: Response) => {
    const recruiterData = req.body;
    recruiterData.email = recruiterData.email.toLowerCase();

    const isExistingRecruiter = await getRecruiterByEmail_UseCase(
      dependencies
    ).execute(recruiterData.email);

    const isPasswordCorrect = await authService.comparePassword(
      recruiterData.password,
      isExistingRecruiter.password
    );

    if (!isPasswordCorrect) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: "email and password is incorrect",
      });
    }

    const payload = isExistingRecruiter.id;
    const token = authService.generatetoken({ id: payload, role: "recruiter" });

    res.json({
      success: true,
      message: "login successfull",
      data: isExistingRecruiter,
      token: token,
    });
  };

  return recruiterLogin;
};
