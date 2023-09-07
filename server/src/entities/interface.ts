export interface DepenteniciesData {
  useCases: useCaseData;
  jobuseCase: jobCaseData;
  repository: respositoryData;
}

export interface respositoryData {
  userRepository: any;
  recruiterRepository: any;
  jobRepository: any;
  profileRepository: any;
}

export interface useCaseData {
  createUser_UseCase: any;
  getUserProfile_UseCase: any;
  getUserByEmail_UseCase: any;
  createRecruiterProfile_UseCase: any;
  getRecruiterByEmail_UseCase: any;
  updateUserProfile_Usecase: any;
  getUserProfileData_UseCase: any;
}

export interface jobCaseData {
  createJobPost_UseCase: any;
  listAllJobs_UseCase: any;
}
