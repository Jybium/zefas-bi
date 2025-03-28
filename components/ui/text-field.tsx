import React from "react";
import { FieldError } from "react-hook-form";

interface TextFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
  required?: boolean;
  type?: "text" | "email" | "password";
}

export const TextField = ({
  id,
  label,
  placeholder,
  error,
  register,
  required = false,
  type = "text",
}: TextFieldProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
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
