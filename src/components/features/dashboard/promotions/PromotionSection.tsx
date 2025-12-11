"use client";
import PromotionDashboardCard from "./PromotionDashboardCard";

const PromotionSection = () => {
  const promotions = [
    {
      _id: "promo-001",
      title: "Summer Sale",
      description:
        "Get 50% off on all items. Limited time offer for summer season!",
      validFrom: "2025-12-11T21:31:11.838Z",
      validTo: "2025-12-31T23:59:59.999Z",
    },
    {
      _id: "promo-002",
      title: "Black Friday",
      description: "Huge discounts on electronics and fashion items.",
      validFrom: "2025-11-25T00:00:00.000Z",
      validTo: "2025-11-30T23:59:59.999Z",
    },
    {
      _id: "promo-003",
      title: "New Year Special",
      description: "Start the new year with amazing deals on all categories!",
      validFrom: "2026-01-01T00:00:00.000Z",
      validTo: "2026-01-15T23:59:59.999Z",
    },
  ];
  return (
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
