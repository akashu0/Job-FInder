import { AxiosRequestConfig } from "axios";
import setAxiosInterceptors from "../../interceptor/axiosInterceptors";
import apiConfig from "../../../../util/apiConfig";

const api = setAxiosInterceptors();

export const jobDetails = async (jobId: string): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: `${apiConfig.jobData}/${jobId}`,
      method: "get",
    };

    const response = await api(config);

    return response.data;
  } catch (error: any) {
    console.log(error.message);

    throw new Error("error while getting job data");
  }
};

export const allJobs = async (): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: apiConfig.allJobs,
      method: "get",
    };
    const response = await api(config);
    return response?.data;
  } catch (error) {
    throw new Error("error while getting all jobs");
  }
};

export const distinctTitleLocationSalary = async (
  field: string,
  setter: any
): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: `${apiConfig.titleLocationSalary}/${field}`,
      method: "get",
    };
    const response = await api(config);
    setter(response.data.distinct);
  } catch (error) {
    throw new Error("error while getting the distinct values");
  }
};

export const filterJobs = async (
  title: string,
  location: string,
  salary: any
): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: `${apiConfig.filterJobs}`,
      method: "post",
      data: {
        title,
        location,
        salary,
      },
    };
    const response = await api(config);
    return response.data.jobs;
  } catch (error) {
    throw new Error("error while getting jobs");
  }
};
