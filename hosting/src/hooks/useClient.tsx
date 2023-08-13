import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback } from "react";

import { useStaticUserSWR } from "./useStaticSwr";

import { API_URL } from "@/constants/apiUrl";

const useClient = () => {
  const { user } = useStaticUserSWR();
  const client = useCallback(
    async <T, D>(config: AxiosRequestConfig): Promise<AxiosResponse<T, D>> => {
      const token = await user.userImpl?.getIdToken();
      const response = await axios
        .request<T>({
          method: config.method,
          url: `${API_URL}${config.url}`,
          headers: {
            accept: "application/json",
            Authorization: token ? `Bearer ${token}` : undefined,
          },
          params: config.params ?? undefined,
          data: config.data ?? undefined,
        })
        .catch((e) => {
          throw e;
        });

      return response;
    },
    [user.userImpl],
  );
  return { client };
};

export default useClient;
