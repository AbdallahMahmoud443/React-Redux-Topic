import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import axiosInstance from "../config/AxiosInstance";

interface ICustomHook {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
}
const useCustomHook = ({ queryKey, url, config }: ICustomHook) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const data = await axiosInstance.get(url, config);
      return data;
    },
  });
};

export default useCustomHook;
