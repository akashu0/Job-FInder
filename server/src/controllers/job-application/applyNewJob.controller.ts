import { Request, Response } from "express";
import { HttpStatus } from "../../util/httpStatus";
import { DepenteniciesData } from "../../entities/interface";
import { CustomRequest } from "../../util/expressRoutes";
import { Types } from "mongoose";
import { JobApplicationInterface } from "../../util/JobApplicationInterface";

export = (dependencies: DepenteniciesData): any => {
  const {
    jobuseCase: { applyNewJob_UseCase },
  } = dependencies;

  const applyNewJob = async (req: Request, res: Response) => {
    try {
      const customReq = req as CustomRequest;

      const jobId = Array.isArray(req.query.jobId)
        ? req.query.jobId[0]
        : req.query.jobId;

      const employerId = Array.isArray(req.query.empId)
        ? req.query.empId[0]
        : req.query.empId;
      console.log(jobId, employerId);

      let application: JobApplicationInterface = {};

      const userId = new Types.ObjectId(customReq.payload);
      application.jobId = new Types.ObjectId(String(jobId));
      application.employerId = new Types.ObjectId(String(employerId));
      application.userId = userId;

      const applyForNewJob = await applyNewJob_UseCase(dependencies).execute(
        application
      );

      if (!applyForNewJob) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "can't find application",
        });
      }

      res.status(HttpStatus.OK).json({
        status: "success",
        message: "successfully filter",
        data: applyForNewJob,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return applyNewJob;
};
