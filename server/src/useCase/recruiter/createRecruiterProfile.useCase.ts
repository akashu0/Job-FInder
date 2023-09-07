import { RecruiterData, RecruiterProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interface";

export const createRecruiterProfile_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { recruiterRepository },
  } = dependencies;

  if (!recruiterRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async ({
    name,
    email,
    phone,
    password,
    companyName,
  }: RecruiterData) => {
    const recruiterProfile = new RecruiterProfile({
      name,
      email,
      phone,
      password,
      companyName,
    });

    return recruiterRepository.createRecruiter(recruiterProfile);
  };

  return {
    execute,
  };
};
