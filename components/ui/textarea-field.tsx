import React from "react";
import { FieldError } from "react-hook-form";

interface TextAreaFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
  required?: boolean;
  rows?: number;
}

export const TextAreaField = ({
  id,
  label,
  placeholder,
  error,
  register,
  required = false,
  rows = 6,
}: TextAreaFieldProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block font-semibold text-black leading-[160%] mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-3 py-[10px] border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm bg-[#f2f2f2] focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...register}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};
