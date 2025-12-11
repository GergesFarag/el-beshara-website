"use client";
import MyBtn from "@/components/ui/MyBtn";
import { Spinner } from "@/components/ui/spinner";
import { AppDispatch } from "@/redux/slices/Store";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import { addPromotionAction, promotionsSelector } from "@/redux/slices/PromotionsSlice";

const AddPromotionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTo, setValidTo] = useState("");

  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const { isLoading } = useSelector(promotionsSelector);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddPromotion = async () => {
    setMessage(null);

    if (!title || !description || !validFrom || !validTo) {
      setMessage({ text: "Please fill in all fields", type: "error" });
      return;
    }

    const newPromotion = {
      title: title.trim(),
      description: description.trim(),
      validFrom,
      validTo,
    };

    dispatch(addPromotionAction(newPromotion))
      .unwrap()
      .then(() => {
        setMessage({ text: "Promotion added successfully!", type: "success" });

        setTitle("");
        setDescription("");
        setValidFrom("");
        setValidTo("");
      })
      .catch((err: any) => {
        setMessage({
          text: err || "Failed to add promotion",
          type: "error",
        });
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAddPromotion();
  };

  return (
    <div className="flex items-center justify-center bg-background">
      <div className="bg-foreground p-10 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Title with Icon */}
        <h1 className="text-3xl font-bold text-center text-background mb-8 flex items-center justify-center gap-2">
          <FaBullhorn className="text-background text-4xl" />
          Add Promotion
        </h1>

        <div className="space-y-6">
          {/* Promotion Title */}
          <div>
            <label
              htmlFor="promo-title"
              className="block text-sm font-medium text-background/80 mb-2"
            >
              Promotion Title
            </label>
            <input
              id="promo-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter promotion title"
              className="w-full px-4 py-3 text-background border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-background/50 transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="promo-description"
              className="block text-sm font-medium text-background/80 mb-2"
            >
              Description
            </label>
            <textarea
              id="promo-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter promotion description"
              className="w-full px-4 py-3 h-28 text-background border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-background/50 transition-all resize-none"
            ></textarea>
          </div>

          {/* Valid From */}
          <div>
            <label
              htmlFor="valid-from"
              className="block text-sm font-medium text-background/80 mb-2"
            >
              Valid From
            </label>
            <input
              id="valid-from"
              type="datetime-local"
              value={validFrom}
              onChange={(e) => setValidFrom(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full px-4 py-3 text-background border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-background/50 transition-all"
            />
          </div>

          {/* Valid To */}
          <div>
            <label
              htmlFor="valid-to"
              className="block text-sm font-medium text-background/80 mb-2"
            >
              Valid To
            </label>
            <input
              id="valid-to"
              type="datetime-local"
              value={validTo}
              onChange={(e) => setValidTo(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full px-4 py-3 text-background border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-background/50 transition-all"
            />
          </div>

          {/* Submit Button */}
          <MyBtn
            onClick={handleAddPromotion}
            text={isLoading ? <Spinner /> : "Add Promotion"}
            width="full"
            disabled={!title || !description || !validFrom || !validTo}
            className={`${
              !title || !description || !validFrom || !validTo
                ? "cursor-not-allowed!"
                : ""
            }`}
          />

          {/* Message */}
          {message && (
            <div
              className={`mt-6 p-3 rounded-lg text-center text-sm ${
                message.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {message.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPromotionForm;
