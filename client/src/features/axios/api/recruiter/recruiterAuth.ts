import axios, { AxiosRequestConfig } from "axios";
import {
  RecruiterRegisterPayload,
  LoginPayload,
} from "../../../../types/PayloadInterface";
import apiConfig from "../../../../util/apiConfig";

export const recruiterLogin = async (payload: LoginPayload): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: `${apiConfig.recruiterLogin}`,
      method: "post",
      data: payload,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 401") {
      throw new Error("Incorrect email or password !!");
    } else {
      throw new Error("Login failed, try again later");
    }
  }
};
