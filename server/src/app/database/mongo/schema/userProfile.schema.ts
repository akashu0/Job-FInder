import mongoose from "mongoose";

interface UserProfile {
  userId: string;
  image: string;
  bio: string;
  gender: string;
  desiredRole: string;
  experirnce: string;
  previousrole: string;
  age: number;
  salary: string;
  workmode: string;
  education: string;
  is_Active: boolean;
  skill: string[];
  link: string;
  project: string;
}

interface UserProfileModel extends mongoose.Model<UserProfileDoc> {
  build(attrs: UserProfile): UserProfileDoc;
}

interface UserProfileDoc extends mongoose.Document {
  userId: string;
  image: string;
  bio: string;
  gender: string;
  desiredRole: string;
  experirnce: string;
  previousrole: string;
  age: number;
  salary: string;
  workmode: string;
  education: string;
  is_Active: boolean;
  skill: string[];
  link: string[];
  project: string;
}

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  bio: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  desiredRole: {
    type: String,
  },
  experirnce: {
    type: String,
  },
  previousrole: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  workmode: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    requried: true,
  },
  is_Active: {
    type: Boolean,
    default: true,
  },
  is_Blocked: {
    type: Boolean,
    default: false,
  },
  skill: {
    type: [String],
    required: true,
  },
  link: {
    git: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
  },
  applied: [
    {
      type: mongoose.Types.ObjectId,
      ref: "jobpost",
    },
  ],
  project: {
    type: String,
  },
});

userProfileSchema.statics.build = (attrs: UserProfile) => {
  return new userProfile({
    userId: attrs.userId,
    image: attrs.image,
    bio: attrs.bio,
    gender: attrs.gender,
    desiredRole: attrs.desiredRole,
    experirnce: attrs.experirnce,
    previousrole: attrs.previousrole,
    age: attrs.age,
    salary: attrs.salary,
    workmode: attrs.workmode,
    education: attrs.education,
    skill: attrs.skill,
    link: attrs.link,
    project: attrs.project,
  });
};

const userProfile = mongoose.model<UserProfileDoc, UserProfileModel>(
  "userProfile",
  userProfileSchema
);

export { userProfile };
