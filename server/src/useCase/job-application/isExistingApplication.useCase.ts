import { DepenteniciesData } from "../../entities/interface";

export const isExistingApplication_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { jobApplicationRepository },
  } = dependencies;

  if (!jobApplicationRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (jobId: any, userId: any) => {
    return jobApplicationRepository.isApplied(jobId, userId);
  };

  return {
    execute,
  };
};
