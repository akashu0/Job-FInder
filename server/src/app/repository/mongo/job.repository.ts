import schema from "../../database/mongo/schema";

const { JobPost } = schema;

export = {
  createJobPost: async (jobs: any) => {
    const newjob = JobPost.build(jobs);
    return await newjob.save();
  },

  findAllJobs: async () => {
    const allJobs = await JobPost.find();
    return allJobs;
  },
};
