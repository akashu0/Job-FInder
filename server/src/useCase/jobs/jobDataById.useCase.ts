import { DepenteniciesData } from "../../entities/interface";

export const jobDataById_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository) {
    throw new Error("The user repository should be dependencie");
  }

  const execute = (id: string) => {
    return jobRepository.jobDataById(id);
  };

  return {
    execute,
  };
};
