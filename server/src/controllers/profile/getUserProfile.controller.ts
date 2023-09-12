import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { CustomRequest } from "../../util/expressRoutes";
import { HttpStatus } from "../../util/httpStatus";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getUserProfileData_UseCase },
  } = dependencies;

  const getProfile = async (req: Request, res: Response) => {
    try {
      // const { userId } = req.params;
      const customReq = req as CustomRequest;
      const userId = customReq.payload ?? "";

      const userData = await getUserProfileData_UseCase(dependencies).execute(
        userId
      );
      if (!userData) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "No profile Exists",
        });
      }

      res.json({
        success: true,
        message: "userData is collected",
        data: userData,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return getProfile;
};
