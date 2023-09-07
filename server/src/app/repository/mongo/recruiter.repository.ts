// import mongoose from "mongoose";
import schema from "../../database/mongo/schema";

const { Recruiter } = schema;

export = {
  getRecruiterByEmail: async (email: string) => {
    const isExist = await Recruiter.findOne({ email });
    return isExist;
  },

  createRecruiter: async (recruiter: any) => {
    const newRecruiter = Recruiter.build(recruiter);
    return await newRecruiter.save();
  },
};
