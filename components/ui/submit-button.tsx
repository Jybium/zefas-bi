import React from "react";

interface SubmitButtonProps {
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const SubmitButton = ({
  label,
  isLoading = false,
  disabled = false,
}: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isLoading || disabled}
      className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {isLoading ? (
        // payment success button
        <span className="flex items-center justify-center">
          <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Processing...
        </span>
      ) : (
        label
      )}
    </button>
  );
};
