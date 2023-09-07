import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { HttpStatus } from "../../util/httpStatus";
import { authService } from "../services/authServices";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createRecruiterProfile_UseCase, getRecruiterByEmail_UseCase },
  } = dependencies;
  const createNewRecruiter = async (req: Request, res: Response) => {
    try {
      const recruiterData = req.body;

      // checking the recruiter in database if already exists
      recruiterData.email = recruiterData.email.toLowerCase();
      const isExistingEmail = await getRecruiterByEmail_UseCase(
        dependencies
      ).execute(recruiterData.email);
      if (isExistingEmail) {
        return res.status(HttpStatus.CONFLICT).json({
          success: false,
          message: "recruiter is already exists",
          data: isExistingEmail,
        });
      }

      recruiterData.password = await authService.encryptPassword(
        recruiterData.password
      );

      const newRecruiter = await createRecruiterProfile_UseCase(
        dependencies
      ).execute(recruiterData);

      if (!newRecruiter) {
        throw new Error("error in function excutions");
      }

      res.json(newRecruiter);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return createNewRecruiter;
};
