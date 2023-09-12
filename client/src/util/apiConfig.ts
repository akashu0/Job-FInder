import configKeys from "./config";

const apiConfig = {
  userLogin: `${configKeys.API_URL}user/login`,
  registerUser: `${configKeys.API_URL}user/register-user`,
  userData: `${configKeys.API_URL}user/`,
  userProfile: `${configKeys.API_URL}userprofile`,
};

export default apiConfig;
