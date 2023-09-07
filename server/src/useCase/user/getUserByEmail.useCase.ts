import { DepenteniciesData } from "../../entities/interface";

export const getUserByEmail_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (email: string) => {
    return userRepository.geteUserByEmail(email);
  };

  return {
    execute,
  };
};
