import express from "express";

import { recruiterController } from "../controllers";
import { DepenteniciesData } from "../entities/interface";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { createRecruiterProfileController, recruiterLoginController } =
    recruiterController(dependencies);

  router.post("/create_recruiter", createRecruiterProfileController);
  router.post("/recruiter_login", recruiterLoginController);

  return router;
};
