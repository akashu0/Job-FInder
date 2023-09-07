import express from "express";
import { DepenteniciesData } from "../entities/interface";

import userRoutes from "./user";
import recruiterRoutes from "./recruiter";
import jobRoutes from "./jobs";
import profileRoutes from "./userprofile";

export const routes = (dependencies: DepenteniciesData) => {
  const routes = express.Router();

  const user = userRoutes(dependencies);
  const recruiter = recruiterRoutes(dependencies);
  const jobs = jobRoutes(dependencies);
  const userProfile = profileRoutes(dependencies);
  routes.use("/user", user);
  routes.use("/recruiter", recruiter);
  routes.use("/jobs", jobs);
  routes.use("/userprofile", userProfile);

  return routes;
};
