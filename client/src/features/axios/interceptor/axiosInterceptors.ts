import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import store from "../../redux/app/Store";
import { clearToken } from "../../redux/slice/user/tokenSlice";
import configKeys from "../../../util/config";
import { error } from "console";

const setAxiosInterceptors = (): AxiosInstance => {
  const api: AxiosInstance = axios.create({
    baseURL: configKeys.API_URL,
  });

  api.interceptors.request.use(
    (config: any) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      if (error.response?.status === 401) {
        // Unauthorized error, clear token and redirect to login page
        store.dispatch(clearToken());
        window.location.replace("/");
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default setAxiosInterceptors;
