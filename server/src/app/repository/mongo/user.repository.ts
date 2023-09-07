import mongoose from "mongoose";
import { schemas } from "../../database/mongo";

const { User } = schemas;

export = {
  geteUserByEmail: async (email: string) => {
    const isExist = await User.findOne({ email });
    return isExist;
  },

  createUser: async (user: any) => {
    const mongooseObject = User.build(user);
    return await mongooseObject.save();
  },

  getUserProfile: async (id: string) => {
    const objectId = new mongoose.Types.ObjectId(id);
    console.log(objectId);

    const mongooseObject = await User.findById(objectId);
    return mongooseObject;
  },

  findAllUser: async () => {
    const allUser = await User.find();
    return allUser;
  },

  updateUserProfile: async (id: string, data: any) => {
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return user;
  },
};
