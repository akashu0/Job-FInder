import applyNewJobController from "./applyNewJob.controller";
import isAppliedJobController from "./isAppliedJob.controller";

export = (dependencies: any) => {
  return {
    applyNewJobController: applyNewJobController(dependencies),
    isAppliedJobController: isAppliedJobController(dependencies),
  };
};
