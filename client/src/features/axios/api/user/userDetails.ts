import { AxiosRequestConfig } from "axios";
import setAxiosInterceptors from "../../interceptor/axiosInterceptors";
import apiConfig from "../../../../util/apiConfig";

const api = setAxiosInterceptors();

export const userData = async (): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: apiConfig.userData,
      method: "get",
    };
    const response = await api(config);
    return response.data;
  } catch (error) {
    throw new Error("error while getting user data");
  }
};

export const userProfile = async (): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: apiConfig.userProfile,
      method: "get",
    };

    const response = await api(config);
    return response.data;
  } catch (error) {
    throw new Error("error while getting user data");
  }
};
