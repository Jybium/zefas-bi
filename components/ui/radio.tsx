import React from "react";
import { Controller, Control } from "react-hook-form";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioButtonGroupProps {
  name: string;
  options: RadioOption[];
  control: Control<any>;
  error?: string;
  className?: string;
  layout?: "horizontal" | "vertical";
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  options,
  control,
  error,
  className = "",
  layout = "horizontal",
}) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div
            className={`flex ${
              layout === "horizontal" ? "space-x-4" : "flex-col space-y-2"
            }`}
          >
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  className="sr-only"
                  value={option.value}
                  checked={field.value === option.value}
                  onChange={() => field.onChange(option.value)}
                />
                <span
                  className={`flex items-center justify-center px-6 py-2 rounded-md text-sm
                  ${error ? "border border-red-300" : ""}
                  ${
                    field.value === option.value
                      ? "bg-green-100 border border-green-600 text-green-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <span
                    className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center
                    ${
                      field.value === option.value
                        ? "bg-green-600 border-green-600"
                        : "border-gray-400"
                    }`}
                  >
                    {field.value === option.value && (
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    )}
                  </span>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        )}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
