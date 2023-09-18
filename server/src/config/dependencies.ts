import {
  userRepository,
  recruiterRepository,
  jobRepository,
  profileRepository,
  jobApplicationRepository,
} from "../app/repository/mongo";
import {
  createUser_UseCase,
  getUserProfile_UseCase,
  getUserByEmail_UseCase,
  getRecruiterByEmail_UseCase,
  createRecruiterProfile_UseCase,
  createJobPost_UseCase,
  listAllJobs_UseCase,
  updateUserProfile_Usecase,
  getUserProfileData_UseCase,
  jobDataById_UseCase,
  titleDistinct_UseCase,
  filterJobs_UseCase,
  applyNewJob_UseCase,
  isExistingApplication_UseCase,
} from "../useCase";

const useCases = {
  createUser_UseCase,
  getUserProfile_UseCase,
  getUserByEmail_UseCase,
  getRecruiterByEmail_UseCase,
  createRecruiterProfile_UseCase,
  updateUserProfile_Usecase,
  getUserProfileData_UseCase,
};

const jobuseCase = {
  createJobPost_UseCase,
  listAllJobs_UseCase,
  jobDataById_UseCase,
  titleDistinct_UseCase,
  filterJobs_UseCase,
  applyNewJob_UseCase,
  isExistingApplication_UseCase,
};

const repository = {
  userRepository,
  recruiterRepository,
  jobRepository,
  profileRepository,
  jobApplicationRepository,
};

export = {
  useCases,
  repository,
  jobuseCase,
};
