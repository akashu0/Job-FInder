import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import configkey from "../../config";

export const authService = {
  encryptPassword: async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
  },
  comparePassword: async (password: string, hasehedPassword: string) => {
    return bcrypt.compare(password, hasehedPassword);
  },

  generatetoken: (payload: { id: string; role: string }) => {
    const token = jwt.sign(payload, configkey.JWT_KEY, {
      expiresIn: "5d",
    });
    return token;
  },
  verifyToken: (token: string) => {
    return jwt.verify(token, configkey.JWT_KEY);
  },
};
