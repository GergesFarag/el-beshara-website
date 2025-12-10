export const addAdminMethod = async (data: {
  email: string;
  password: string;
  username: string;
}) => {
  const res = await fetch("/api/admins", {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return res;
};
