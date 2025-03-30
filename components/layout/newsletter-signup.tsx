// components/layout/NewsletterSignup.tsx
import React from "react";
import { useForm } from "react-hook-form";

interface NewsletterFormData {
  email: string;
}

export const NewsletterSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    // Implement newsletter signup logic
    console.log("Newsletter signup:", data);
  };

  return (
    <div className="rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">Subscribe to Newsletter</h3>
      <p className="text-sm text-gray-800 mb-4 capitalize">
        Data tips straight in your inbox
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex border border-brand-100 py-[10px] px-4 rounded"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-grow px-3 rounded-l focus:outline-none focus:ring-0 focus:ring-brand-500 focus:border-brand-500 bg-transparent"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <button
          type="submit"
          className="bg-brand-600 p-3 font-medium text-sm text-white px-4 py-2 h-[40px] w-[171px] rounded hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          Subscribe Now
        </button>
      </form>
      {errors.email && (
        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
      )}
    </div>
  );
};
