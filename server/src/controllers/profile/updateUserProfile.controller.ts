import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { updateUserProfile_Usecase },
  } = dependencies;

  const updateUserProfile = async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const id = userData.userId;
      if (!id) {
        return res.json({
          success: false,
          message: "userId is required",
          data: userData,
        });
      }
      if (req?.file?.path) {
        userData.image = req?.file?.path;
      }

      const updateUserProfile = await updateUserProfile_Usecase(
        dependencies
      ).execute(userData);

      res.json({
        success: true,
        message: "profile is updated",
        data: updateUserProfile,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return updateUserProfile;
};
