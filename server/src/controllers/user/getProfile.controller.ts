import { NextFunction, Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { CustomRequest } from "../../util/expressRoutes";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getUserProfile_UseCase },
  } = dependencies;

  const getProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // const { userId } = req.params;
      // console.log(userId);
      const customReq = req as CustomRequest;
      const userId = customReq.payload ?? "";

      const userProfile = await getUserProfile_UseCase(dependencies).execute({
        userId,
      });
      if (!userProfile) {
        console.log("No such profile found");
      }

      res.json(userProfile);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return getProfile;
};
