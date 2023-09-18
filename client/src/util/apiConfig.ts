import configKeys from "./config";

const apiConfig = {
  userLogin: `${configKeys.API_URL}user/login`,
  registerUser: `${configKeys.API_URL}user/register-user`,
  userData: `${configKeys.API_URL}user/`,
  userProfile: `${configKeys.API_URL}userprofile`,

  jobData: `${configKeys.API_URL}jobs/job-data`,
  allJobs: `${configKeys.API_URL}jobs/all-jobs`,
  filterJobs: `${configKeys.API_URL}jobs/filter-jobs`,
  titleLocationSalary: `${configKeys.API_URL}jobs/distinct`,

  applyjob: `${configKeys.API_URL}job-application/create-application`,
  isApplied: `${configKeys.API_URL}job-application/is-applied`,
};

export default apiConfig;
