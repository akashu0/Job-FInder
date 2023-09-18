import express from "express";
import { DepenteniciesData } from "../entities/interface";
import { jobController } from "../controllers";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const {
    createJobController,
    listAllJobsController,
    jobDataByIdController,
    titleDistinctController,
    filterJobsController,
  } = jobController(dependencies);

  router.post("/create_job", createJobController);
  router.put("/update-job/:id");
  router.get("/all-jobs", listAllJobsController);
  router.get("/job-data/:id", jobDataByIdController);
  router.get("/distinct/:field", titleDistinctController);
  router.post("/filter-jobs", filterJobsController);

  return router;
};
