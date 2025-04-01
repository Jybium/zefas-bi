// components/ui/RatingSelector.tsx
import React from "react";
import { Controller, Control } from "react-hook-form";

interface RatingSelectorProps {
  name: string;
  control: Control<any>;
  min?: number;
  max?: number;
  error?: string;
  label?: string;
}

export const RatingSelector: React.FC<RatingSelectorProps> = ({
  name,
  control,
  min = 1,
  max = 10,
  error,
  label,
}) => {
  const values = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div>
      {label && <label className="block text-gray-700 mb-2">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex justify-between">
            {values.map((value) => (
              <label key={value} className="flex flex-col items-center">
                <span className="mb-1 text-sm">{value}</span>
                <button
                  type="button"
                  className={`w-6 h-6 rounded-full border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500
                  ${
                    field.value === value
                      ? "bg-green-600 border-green-600"
                      : "border-gray-300 bg-white"
                  }`}
                  onClick={() => field.onChange(value)}
                >
                  {field.value === value && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </button>
              </label>
            ))}
          </div>
        )}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
