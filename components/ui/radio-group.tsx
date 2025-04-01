import React, { useState } from "react";

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  horizontal?: boolean;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  defaultValue,
  onChange,
  label,
  horizontal = false,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className={className}>
      {label && (
        <div className="mb-2 text-sm font-medium text-gray-700">{label}</div>
      )}
      <div
        className={`flex ${horizontal ? "flex-row gap-4" : "flex-col gap-2"}`}
      >
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
