import axios, { AxiosRequestConfig } from "axios";

import {
  LoginPayload,
  SignupPayload,
} from "../../../../types/PayloadInterface";

import apiConfig from "../../../../util/apiConfig";

export const userLogin = async (payload: LoginPayload): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: `${apiConfig.userLogin}`,
      method: "post",
      data: payload,
    };

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    if (error.success === false) {
      throw new Error("Incrrocet email or password !!!");
    } else {
      throw new Error("Login failed, try again");
    }
  }
};

export const registerUser = async (payload: SignupPayload): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: `${apiConfig.registerUser}`,
      method: "post",
      data: payload,
    };

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 409") {
      throw new Error("Email already exists !!!");
    } else {
      throw new Error("Signup failed, try again");
    }
  }
};
