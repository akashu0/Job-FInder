import mongoose from "mongoose";

interface UserAttrs {
  name: string;
  email: string;
  password: string;
  userId: string;
  phone: number;
  is_Admin: boolean;
}

interface UserModal extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  phone: number;
  is_Admin: boolean;
  userId: string;
}

const userSchema = new mongoose.Schema(
  {
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
    is_Admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

userSchema.set("versionKey", "version");

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User({
    _id: attrs.userId,
    email: attrs.email,
    name: attrs.name,
    password: attrs.password,
    phone: attrs.phone,
    is_Admin: attrs.is_Admin,
  });
};

const User = mongoose.model<UserDoc, UserModal>("User", userSchema);

export { User };
