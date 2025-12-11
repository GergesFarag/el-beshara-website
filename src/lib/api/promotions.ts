import { IPromotionInterface } from "../Interfaces/PromotionInterface";

export const addPromotionMethod = async (data: IPromotionInterface) => {
    try{
      const res = await fetch("/api/promotions", {
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

export const getPromotionsMethod = async () => {
  try{
    const res = await fetch("/api/promotions", {
      method: "GET",
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
