import { schemas } from "../../database/mongo";

const { userProfile } = schemas;

export = {
  createUserProfile: async (user: any) => {
    const newProfile = userProfile.build(user);
    return await newProfile.save();
  },
  getUserByProfile: async (id: string) => {
    const getprofile = await userProfile.findOne({ userId: id });
    return getprofile;
  },
  editUserProfile: async (id: string, data: any) => {
    const updatedProfile = await userProfile.findByIdAndUpdate(id, data);
    return updatedProfile;
  },
  findAllProfile: async () => {
    const findall = await userProfile.find();
    return findall;
  },
};
