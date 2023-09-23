import { AxiosRequestConfig } from "axios";
import apiConfig from "../../../../util/apiConfig";
import setAxiosIntercepotorsRecruiter from "../../interceptor/axiosInterceptorsRecruiter";

const api = setAxiosIntercepotorsRecruiter();

export const recruiterData = async (): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: apiConfig.recruiterData,
      method: "get",
    };
    const response = await api(config);
    return response.data;
  } catch (error) {
    throw new Error("error while getting employer data");
  }
};
