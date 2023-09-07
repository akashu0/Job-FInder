import { DepenteniciesData } from "../../entities/interface";

export const getUserProfileData_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { profileRepository },
  } = dependencies;

  if (!profileRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({ userId }: { userId: string }) => {
    return profileRepository.getUserByProfile(userId);
  };
  return {
    execute,
  };
};
