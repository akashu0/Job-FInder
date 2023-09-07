import { profileData, Profile } from "../../entities";

import { DepenteniciesData } from "../../entities/interface";

export const updateUserProfile_Usecase = (dependencies: DepenteniciesData) => {
  const {
    repository: { profileRepository },
  } = dependencies;

  if (!profileRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async ({
    userId,
    image,
    bio,
    gender,
    desiredRole,
    experirnce,
    previousrole,
    age,
    salary,
    workmode,
    education,
    skill,
    link,
    project,
  }: profileData) => {
    const updateUser = new Profile({
      userId,
      image,
      bio,
      gender,
      desiredRole,
      experirnce,
      previousrole,
      age,
      salary,
      workmode,
      education,
      skill,
      link,
      project,
    });
    return profileRepository.createUserProfile(updateUser);
  };

  return {
    execute,
  };
};
