import axios, { AxiosRequestConfig } from "axios";

import { LoginPayload } from "../../../../types/PayloadInterface";

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
