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
  jobDataById: async (id: string) => {
    const jobData = await JobPost.findById(id);
    return jobData;
  },

  getfieldData: async (field: string) => {
    const distinctValues = await JobPost.distinct(field);
    return distinctValues;
  },
  filterData: async (
    title: string,
    location: string,
    salary: string
  ): Promise<any> => {
    const filter: any = {};
    if (title) {
      filter.title = { $regex: new RegExp(title, "i") };
    }

    if (location) {
      filter.location = { $regex: new RegExp(location, "i") };
    }

    if (salary) {
      filter.salary = { $regex: new RegExp(salary, "i") };
    }
    const jobs = await JobPost.find(filter);
    return jobs;
  },
};
