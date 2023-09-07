import createJobController from "./createJob.controller";
import listAllJobsController from "./listAllJobs.controller";

export = (dependencies: any) => {
  return {
    createJobController: createJobController(dependencies),
    listAllJobsController: listAllJobsController(dependencies),
  };
};
