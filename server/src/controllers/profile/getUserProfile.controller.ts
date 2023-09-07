import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getUserProfileData_UseCase },
  } = dependencies;

  const getProfile = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const userData = await getUserProfileData_UseCase(dependencies).execute({
        userId,
      });
      if (!userData) {
        return res.json({
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
