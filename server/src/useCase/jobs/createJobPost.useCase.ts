import { jobPostData, jobPostProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interface";

export const createJobPost_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async ({
    title,
    role,
    department,
    salary,
    reponsibility,
    requirements,
    experience,
    location,
    recruiterId,
  }: jobPostData) => {
    const newJobPost = new jobPostProfile({
      title,
      role,
      department,
      salary,
      reponsibility,
      requirements,
      experience,
      location,
      recruiterId,
    });

    return jobRepository.createJobPost(newJobPost);
  };

  return {
    execute,
  };
};
