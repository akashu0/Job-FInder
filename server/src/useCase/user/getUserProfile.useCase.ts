// import { ObjectId } from "mongoose";
import { DepenteniciesData } from "../../entities/interface";

export const getUserProfile_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({ userId }: { userId: string }) => {
    return userRepository.getUserProfile(userId);
  };
  return {
    execute,
  };
};
