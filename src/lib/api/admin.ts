export const addAdminMethod = async (data: {
  email: string;
  username: string;
  password: string;
}) => {
  try {
    const res = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify(data),
    })
    const result = await res.json();
    return result;
  } catch (err) {
    if (err instanceof Error) return { success: false, message: err.message };
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
};
