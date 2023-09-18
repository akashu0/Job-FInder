import { DepenteniciesData } from "../../entities/interface";
import { JobApplicationInterface } from "../../util/JobApplicationInterface";

export const applyNewJob_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobApplicationRepository },
  } = dependencies;

  if (!jobApplicationRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (data: JobApplicationInterface) => {
    return jobApplicationRepository.applyNewJob(data);
  };

  return {
    execute,
  };
};
