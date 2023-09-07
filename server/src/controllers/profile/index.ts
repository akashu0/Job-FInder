import updateUserProfileController from "./updateUserProfile.controller";
import getUserProfileController from "./getUserProfile.controller";
export = (dependencies: any) => {
  return {
    updateUserProfileController: updateUserProfileController(dependencies),
    getUserProfileController: getUserProfileController(dependencies),
  };
};
