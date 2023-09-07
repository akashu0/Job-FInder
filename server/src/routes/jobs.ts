import express from "express";
import { DepenteniciesData } from "../entities/interface";
import { jobController } from "../controllers";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { createJobController, listAllJobsController } =
    jobController(dependencies);

  router.post("/create_job", createJobController);
  router.get("/getall_job", listAllJobsController);

  return router;
};
