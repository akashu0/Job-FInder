import express from "express";

import { profileContoller } from "../controllers";
import { DepenteniciesData } from "../entities/interface";
import authenticationMiddleware from "../middleware/authenticationMiddleware";
import { upload } from "../middleware/multerCloudinary";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  const { updateUserProfileController, getUserProfileController } =
    profileContoller(dependencies);
  router.post(
    "/updateProfile",
    authenticationMiddleware,
    upload,
    updateUserProfileController
  );

  router.get("/", authenticationMiddleware, getUserProfileController);

  return router;
};
