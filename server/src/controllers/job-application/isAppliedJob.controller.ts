import { Request, Response } from "express";
import { HttpStatus } from "../../util/httpStatus";
import { DepenteniciesData } from "../../entities/interface";
import { CustomRequest } from "../../util/expressRoutes";
import { Types } from "mongoose";

export = (dependencies: DepenteniciesData): any => {
  const {
    jobuseCase: { isExistingApplication_UseCase },
  } = dependencies;

  const existingApplicant = async (req: Request, res: Response) => {
    try {
      const customReq = req as CustomRequest;

      let jobId = Array.isArray(req.query.jobId)
        ? req.query.jobId[0]
        : req.query.jobId;
      const userId = new Types.ObjectId(customReq.payload);
      const jobID = new Types.ObjectId(String(jobId));

      const alreadyApplied = await isExistingApplication_UseCase(
        dependencies
      ).execute(jobID, userId);
      // console.log(alreadyApplied);

      if (alreadyApplied) {
        return res.json({
          status: "Applied",
          message: "already applied",
        });
      }

      res.status(HttpStatus.OK).json({
        status: "Apply Now",
        message: "not applied",
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return existingApplicant;
};
