import express, { application } from "express";
import { DepenteniciesData } from "../entities/interface";

import userRoutes from "./user";
import recruiterRoutes from "./recruiter";
import jobRoutes from "./jobs";
import profileRoutes from "./userprofile";
import jobApplicationRoutes from "./job-application";

export const routes = (dependencies: DepenteniciesData) => {
  const routes = express.Router();

  const user = userRoutes(dependencies);
  const recruiter = recruiterRoutes(dependencies);
  const jobs = jobRoutes(dependencies);
  const userProfile = profileRoutes(dependencies);
  const jobApplication = jobApplicationRoutes(dependencies);
  routes.use("/user", user);
  routes.use("/recruiter", recruiter);
  routes.use("/jobs", jobs);
  routes.use("/userprofile", userProfile);
  routes.use("/job-application", jobApplication);
  return routes;
};
