import express from "express";

import { userController } from "../controllers";
import { DepenteniciesData } from "../entities/interface";
import authenticationMiddleware from "../middleware/authenticationMiddleware";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getProfileController, createProfileController, userLoginController } =
    userController(dependencies);

  router.get("/", authenticationMiddleware, getProfileController);
  router.post("/register-user", createProfileController);
  router.post("/login", userLoginController);

  return router;
};
