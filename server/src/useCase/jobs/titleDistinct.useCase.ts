import { DepenteniciesData } from "../../entities/interface";

export const titleDistinct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository) {
    throw new Error("The user repository should be dependencie");
  }

  const execute = (field: string) => {
    return jobRepository.getfieldData(field);
  };

  return {
    execute,
  };
};
