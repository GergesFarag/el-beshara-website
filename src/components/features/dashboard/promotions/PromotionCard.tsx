import React from "react";
import { Calendar, Clock } from "lucide-react";

const PromotionCard = ({
  _id = "promo-001",
  title = "Summer Sale",
  description = "Get 50% off on all items. Limited time offer!",
  validFrom = "2025-12-11T21:31:11.838Z",
  validTo = "2025-12-31T23:59:59.999Z",
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isActive = () => {
    const now = new Date();
    const start = new Date(validFrom);
    const end = new Date(validTo);
    return now >= start && now <= end;
  };

  const getDaysRemaining = () => {
    const now = new Date();
    const end = new Date(validTo);
    const diffTime = end - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {isActive() && (
            <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Active
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-base mb-4">{description}</p>

        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-medium mr-2">Valid From:</span>
            <span>{formatDate(validFrom)}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-purple-500" />
            <span className="font-medium mr-2">Valid To:</span>
            <span>{formatDate(validTo)}</span>
          </div>
        </div>

        {isActive() && getDaysRemaining() > 0 && (
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-md p-3">
            <p className="text-sm text-yellow-800 font-medium">
              ⏰ {getDaysRemaining()}{" "}
              {getDaysRemaining() === 1 ? "day" : "days"} remaining
            </p>
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;
