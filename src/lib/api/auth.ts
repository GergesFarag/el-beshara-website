import { m } from "framer-motion";

export const loginMethod = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log(email, password);
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await res.json();

    if (!res.ok) {
      return { success: false, message: result.message || "Login failed" };
    }

    return { success: true, message: "Login successful", data: result.data };
  } catch (err) {
    return {
      success: false,
      message: err.message || "Something went wrong",
    };
  }
};
