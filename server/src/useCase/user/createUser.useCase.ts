import { UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interface";

export const createUser_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async ({
    name,
    email,
    phone,
    is_Admin,
    password,
  }: UserData) => {
    const userProfile = new UserProfile({
      name,
      email,
      password,
      phone,
      is_Admin,
    });
    return userRepository.createUser(userProfile);
  };
  return {
    execute,
  };
};
