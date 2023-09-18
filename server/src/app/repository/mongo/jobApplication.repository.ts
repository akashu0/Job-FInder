import { JobApplicationInterface } from "../../../util/JobApplicationInterface";
import schema from "../../database/mongo/schema";

const { JobApplication } = schema;

export = {
  applyNewJob: async (
    data: JobApplicationInterface
  ): Promise<JobApplicationInterface | null> => {
    const applicationExists = await JobApplication.findOne({
      userId: data.userId,
      jobId: data.jobId,
    });

    if (!applicationExists) {
      const newApplication = await JobApplication.create(data);
      return newApplication;
    }
    return null;
  },

  isApplied: async (jobId: string, userId: string): Promise<any> => {
    const appliedJod = await JobApplication.findOne({
      jobId: jobId,
      userId: userId,
    });
    if (appliedJod) {
      return appliedJod;
    }
  },
};
