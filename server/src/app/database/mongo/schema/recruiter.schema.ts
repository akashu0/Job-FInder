import mongoose from "mongoose";

interface RecruiterAttrs {
  name: string;
  email: string;
  password: string;
  phone: string;
  companyName: string;
}

interface RecruiterModel extends mongoose.Model<RecruiterDoc> {
  build(attrs: RecruiterAttrs): RecruiterDoc;
}

interface RecruiterDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  companyName: string;
}

const recruiterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  is_Blocked: {
    type: Boolean,
    default: false,
  },
  is_Active: {
    type: Boolean,
    default: true,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
});

recruiterSchema.statics.build = (attrs: RecruiterAttrs) => {
  return new Recruiter({
    name: attrs.name,
    email: attrs.email,
    password: attrs.password,
    phone: attrs.phone,
    companyName: attrs.companyName,
  });
};

const Recruiter = mongoose.model<RecruiterDoc, RecruiterModel>(
  "Recruiter",
  recruiterSchema
);

export { Recruiter };
