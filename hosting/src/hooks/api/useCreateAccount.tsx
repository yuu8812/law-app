import { useCallback } from "react";

import useClient from "../useClient";

const useCreateUser = (): {
  createUser: () => Promise<string>;
} => {
  const { client } = useClient();

  const createUser = useCallback(async () => {
    const { data } = await client({
      method: "create",
      url: "/user",
    });
    return "w" as string;
  }, [client]);

  return { createUser };
};

export default useCreateUser;
