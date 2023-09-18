import { DepenteniciesData } from "../../entities/interface";

export const filterJobs_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository) {
    throw new Error("The user repository should be dependencie");
  }

  const execute = (title: string, location: string, salary: string) => {
    return jobRepository.filterData(title, location, salary);
  };

  return {
    execute,
  };
};
