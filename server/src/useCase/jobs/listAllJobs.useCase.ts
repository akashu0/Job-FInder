import { DepenteniciesData } from "../../entities/interface";

export const listAllJobs_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository) {
    throw new Error("The user repository should be dependencie");
  }

  const execute = () => {
    return jobRepository.findAllJobs();
  };

  return {
    execute,
  };
};
