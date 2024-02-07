export const setSession = async (token: string) => {
  const res = await fetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ token }),
  });
  return res.body;
};

export const removeSession = async () => {
  const res = await fetch("/api/session", {
    method: "DELETE",
  });
  return res.body;
};
