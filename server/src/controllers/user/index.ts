import getProfileController from "./getProfile.controller";
import createProfileController from "./createProfile.controller";
import userLoginController from "./userLogin.controller";

export = (dependencies: any) => {
  return {
    getProfileController: getProfileController(dependencies),
    createProfileController: createProfileController(dependencies),
    userLoginController: userLoginController(dependencies),
  };
};
