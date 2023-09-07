import mongoose, { Document, Model, ObjectId } from "mongoose";
import slugify from "slugify";

interface IJobPost {
  title: string;
  role: string;
  department: string;
  salary: {
    minSalary: number;
    maxSalary: number;
  };
  reponsibility: string;
  requirements: string;
  experience: string;
  location: string;
  recruiterId: ObjectId;
  is_Active: boolean;
  is_blocked: boolean;
  slug: string;
  createdAt: Date;
}

interface jobModel extends mongoose.Model<jobDoc> {
  build(attrs: IJobPost): jobDoc;
}

interface jobDoc extends mongoose.Document {
  title: string;
  role: string;
  department: string;
  salary: {
    minSalary: number;
    maxSalary: number;
  };
  reponsibility: string;
  requirements: string;
  experience: string;
  location: string;
  recruiterId: ObjectId;
  is_Active: boolean;
  is_blocked: boolean;
  slug: string;
  createdAt: Date;
}

const jobPostSchema = new mongoose.Schema<IJobPost>({
  title: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    minSalary: {
      type: Number,
      required: true,
    },
    maxSalary: {
      type: Number,
      required: true,
    },
  },
  reponsibility: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    default: "0",
  },
  location: {
    type: String,
    required: true,
  },
  recruiterId: {
    type: mongoose.Types.ObjectId,
    ref: "Recruiter",
    required: true,
  },
  is_Active: {
    type: Boolean,
    default: true,
  },
  is_blocked: {
    type: Boolean,
    default: false,
  },
  slug: {
    type: String,
    unique: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Middleware to generate and set the slug before saving
jobPostSchema.pre<IJobPost>("save", function (next) {
  const jobPost = this;

  // Generate a slug from the title using slugify
  const slug = slugify(jobPost.title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  jobPost.slug = slug;

  next();
});

// Define a static method for building a JobPost document
jobPostSchema.statics.build = (attrs: IJobPost) => {
  return new JobPost({
    title: attrs.title,
    role: attrs.role,
    department: attrs.department,
    salary: attrs.salary,
    reponsibility: attrs.reponsibility,
    requirements: attrs.requirements,
    experience: attrs.experience,
    location: attrs.location,
    recruiterId: attrs.recruiterId,
    is_Active: attrs.is_Active,
    is_blocked: attrs.is_blocked,
    slug: attrs.slug,
    createdAt: attrs.createdAt,
  });
};

const JobPost = mongoose.model<jobDoc, jobModel>("jobpost", jobPostSchema);

export { JobPost };
