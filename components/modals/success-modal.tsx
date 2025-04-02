import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#12121240] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg mx-4 p-8 max-w-md w-full relative">
        {/* Close (X) button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Success checkmark icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13L9 17L19 7"
                stroke="#16A34A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Success message */}
        <h2 className="text-2xl font-bold text-green-600 text-center mb-2">
          Success!
        </h2>
        <p className="text-gray-700 text-center mb-2">
          Your form has been successfully sent.
        </p>
        <p className="text-gray-600 text-center mb-6">
          Our representative will reach out to you in a short while.
        </p>

        {/* Close button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-6 h-[60px] w-full rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
