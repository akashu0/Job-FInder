import {
  userRepository,
  recruiterRepository,
  jobRepository,
  profileRepository,
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
};

const repository = {
  userRepository,
  recruiterRepository,
  jobRepository,
  profileRepository,
};

export = {
  useCases,
  repository,
  jobuseCase,
};
