"use client";
import {
  getPromotionsAction,
  promotionsSelector,
} from "@/redux/slices/PromotionsSlice";
import PromotionDashboardCard from "./PromotionDashboardCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "@/redux/slices/Store";
import { Spinner } from "@/components/ui/spinner";

const PromotionSection = () => {
  const { promotions, isLoading } = useSelector(promotionsSelector);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(getPromotionsAction());
  }, [dispatch]);

  return isLoading ? (
    <div className="flex items-center justify-center min-h-[400px]">
      <Spinner className="w-20 h-20" />
    </div>
  ) : (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {promotions.map((promotion) => (
          <PromotionDashboardCard {...promotion} key={promotion._id} />
        ))}
      </div>
    </div>
  );
};

export default PromotionSection;
