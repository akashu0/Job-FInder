import createRecruiterProfileController from "./createRecruiterProfile.controller";
import recruiterLoginController from "./recruiterLogin.controller";

export = (dependencies: any) => {
  return {
    createRecruiterProfileController:
      createRecruiterProfileController(dependencies),
    recruiterLoginController: recruiterLoginController(dependencies),
  };
};
