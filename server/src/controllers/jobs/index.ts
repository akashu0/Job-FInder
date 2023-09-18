import createJobController from "./createJob.controller";
import listAllJobsController from "./listAllJobs.controller";
import jobDataByIdController from "./jobDataById.controller";
import titleDistinctController from "./titleDistinct.controller";
import filterJobsController from "./filterJobs.controller";

export = (dependencies: any) => {
  return {
    createJobController: createJobController(dependencies),
    listAllJobsController: listAllJobsController(dependencies),
    jobDataByIdController: jobDataByIdController(dependencies),
    titleDistinctController: titleDistinctController(dependencies),
    filterJobsController: filterJobsController(dependencies),
  };
};
