import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";

export = (dependencies: DepenteniciesData): any => {
  const {
    jobuseCase: { createJobPost_UseCase },
  } = dependencies;

  const createNewJobPost = async (req: Request, res: Response) => {
    try {
      const jobData = req.body;

      const newJobPost = await createJobPost_UseCase(dependencies).execute(
        jobData
      );

      if (!newJobPost) {
        throw new Error("error in function excutions");
      }
      res.json({
        success: true,
        message: "new job post is created",
        data: newJobPost,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return createNewJobPost;
};
