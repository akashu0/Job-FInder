import { DepenteniciesData } from "../../entities/interface";

export const getRecruiterByEmail_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { recruiterRepository },
  } = dependencies;

  if (!recruiterRepository) {
    throw new Error("The user repository should be dependencie");
  }
  const execute = (email: string) => {
    return recruiterRepository.getRecruiterByEmail(email);
  };

  return {
    execute,
  };
};
