import { IImage } from "../Interfaces/ImgInterface";

export const AddVideoMethod = async (data: IImage) => {
  try {
    const res = await fetch("/api/video", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  } catch (err) {
    if (err instanceof Error) return { success: false, message: err.message };
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
};

export const getVideosMethod = async ({ page = 1, limit = 5 }) => {
  try {
    const res = await fetch(`/api/video?page=${page}&limit=${limit}`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    if (err instanceof Error) return { success: false, message: err.message };
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
};