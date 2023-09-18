import express from "express";
import { DepenteniciesData } from "../entities/interface";
import { jobApplicationController } from "../controllers";
import authenticationMiddleware from "../middleware/authenticationMiddleware";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { applyNewJobController, isAppliedJobController } =
    jobApplicationController(dependencies);

  router.get(
    "/create-application",
    authenticationMiddleware,
    applyNewJobController
  );
  router.get("/is-applied", authenticationMiddleware, isAppliedJobController);

  return router;
};
