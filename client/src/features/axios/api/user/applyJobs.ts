import { AxiosRequestConfig } from "axios";
import setAxiosInterceptors from "../../interceptor/axiosInterceptors";
import apiConfig from "../../../../util/apiConfig";
import { log } from "console";

const api = setAxiosInterceptors();

export const applyForJob = async (
  jobId: string,
  empId: string
): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: `${apiConfig.applyjob}?jobId=${jobId}$empId=${empId}`,
      method: "get",
    };

    const response = await api(config);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const isApplied = async (jobId: string, empId: string): Promise<any> => {
  try {
    if (jobId && empId) {
      const config: AxiosRequestConfig = {
        url: `${apiConfig.isApplied}?jobId=${jobId}&empId=${empId}`,
        method: "get",
      };

      const response = await api(config);
      return response.data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
