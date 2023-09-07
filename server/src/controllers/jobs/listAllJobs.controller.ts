import { Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { HttpStatus } from "../../util/httpStatus";

export = (dependencies: DepenteniciesData): any => {
  const {
    jobuseCase: { listAllJobs_UseCase },
  } = dependencies;

  const listAllJobs = async (req: Request, res: Response) => {
    try {
      const joblist = await listAllJobs_UseCase(dependencies).execute();

      if (!joblist) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "joblist is empty",
        });
      }

      res.json({
        success: true,
        message: "job list retrieved",
        data: joblist,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return listAllJobs;
};
