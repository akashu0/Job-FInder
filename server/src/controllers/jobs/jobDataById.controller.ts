import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { HttpStatus } from "../../util/httpStatus";

export = (dependencies: DepenteniciesData): any => {
  const {
    jobuseCase: { jobDataById_UseCase },
  } = dependencies;

  const jobDataById = async (req: Request, res: Response) => {
    try {
      const jobId = req.params.id;
      console.log(jobId);

      const getJobData = await jobDataById_UseCase(dependencies).execute(jobId);

      if (!getJobData) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "failed to get jobData or jobId is invalid ",
        });
      }

      res.status(HttpStatus.OK).json({
        success: true,
        message: " successfully get jobDetails",
        data: getJobData,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return jobDataById;
};
