import { CreateCitizensMutation } from "@/graphql/type";

export const getLoginBonus = async (): Promise<{ res: CreateCitizensMutation }> => {
  const res = await fetch("/api/bonus", {
    method: "GET",
    cache: "no-cache",
  });
  const json = await res.json();
  console.log(json);
  return json;
};
