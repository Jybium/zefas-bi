import React, { useState } from "react";

interface RatingScaleProps {
  id: string;
  label: string;
  maxRating: number;
  initialRating?: number;
  onChange?: (rating: number) => void;
}

export const RatingScale: React.FC<RatingScaleProps> = ({
  id,
  label,
  maxRating = 10,
  initialRating = 0,
  onChange,
}) => {
  const [selectedRating, setSelectedRating] = useState<number>(initialRating);

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
    if (onChange) onChange(rating);
  };

  return (
    <div className="mb-4">
      <div className="mb-2 text-sm font-medium text-gray-700">{label}</div>
      <div
        className="flex justify-between space-x-1"
        role="radiogroup"
        aria-labelledby={`${id}-label`}
      >
        {Array.from({ length: maxRating }, (_, i) => i + 1).map((rating) => (
          <button
            key={rating}
            type="button"
            aria-checked={selectedRating === rating}
            role="radio"
            className={`
              h-8 w-8 flex items-center justify-center rounded-full
              ${
                selectedRating === rating
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
            `}
            onClick={() => handleRatingChange(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );
};
