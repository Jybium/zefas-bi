"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Calendar, MapPin, Phone } from "lucide-react";
import SuccessModal from "../modals/success-modal";

// Form validation schema
const formSchema = z.object({
  confirmation: z
    .enum(["Yes", "No"], {
      required_error: "Confirmation is required",
    })
    .refine((val) => val === "Yes", {
      message: "You must confirm your willingness to participate",
    }),
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  linkedinUrl: z
    .string()
    .url({ message: "Valid LinkedIn URL is required" })
    .optional()
    .or(z.literal("")),
  country: z.string().min(1, { message: "Country is required" }),
  powerBiKnowledge: z.number().min(1).max(10),
  timeConfirmation: z.enum(["Yes", "No"], {
    required_error: "Please confirm if the time works for you",
  }),
  commitmentOath: z
    .enum(["Yes", "No", "Maybe"], {
      required_error: "Please confirm your commitment",
    })
    .refine((val) => val === "Yes", {
      message: "Commitment is required for enrollment",
    }),
  termsAgreement: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const EnrollmentForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      confirmation: undefined,
      powerBiKnowledge: 0,
      timeConfirmation: undefined,
      commitmentOath: undefined,
      termsAgreement: false,
    },
  });

  function validateForm() {
    // This function ensures that all required fields are filled and valid
    const form = document.querySelector("form");
    if (!form) return false;

    const inputs = form.querySelectorAll("input, select, textarea");
    let isValid = true;

    inputs.forEach((input) => {
      if (
        (input as HTMLInputElement).required &&
        !(input as HTMLInputElement).value.trim()
      ) {
        isValid = false;
        input.classList.add("border-red-500");
      } else {
        input.classList.remove("border-red-500");
      }
    });

    return isValid;
  }

  const onSubmit = async (data: any) => {
    if (!validateForm()) return; // Validate before submitting
    setIsSubmitting(true);

    try {
      // Access the form element instead of passing data directly
      const form = document.getElementById(
        "enrollment-form"
      ) as HTMLFormElement; // Explicitly cast to HTMLFormElement

      if (form) {
        await emailjs.sendForm(
          "service_y8lexpi",
          "template_5m7igf1",
          form, // Pass the form element here, not the data object
          "7o-6FC__8zpQTa0Qx"
        );

        // Show success modal here
        setIsModalOpen(true); // Assuming you have this state

        // Scroll to top after form submission
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert("Error submitting form: " + error.message + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white lg:p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-brand-700 mb-4">
          Thank You!
        </h2>
        <p className="text-black mb-6">
          Your enrollment form has been submitted successfully. We'll contact
          you shortly with further details.
        </p>
        <button
          className="w-full bg-brand-600 text-white py-3 rounded-md hover:bg-brand-700 transition-colors"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Enrollment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-transparent lg:p-6 rounded-lg shadow-sm lg:w-1/2">
      <h1 className="text-xl lg:text-4xl font-medium text-brand-800 mb-6">
        Fill out the form below in order to enroll for the training.
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        id="enrollment-form"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-6 gap-y-4">
          <div className="flex items-center text-black">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              Event Timing:{" "}
              <span className="font-semibold">April 12 , 2025</span>
            </span>
          </div>

          <div className="flex items-center text-black">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">
              Event Address:
              <span className="font-semibold">MS Teams</span>
            </span>
          </div>

          <div className="flex items-center text-black">
            <Phone className="h-4 w-4 mr-2" />

            <span className="text-sm">
              Contact Us:
              <span className="font-semibold">+2348063141631</span>
            </span>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-2 font-medium text-black ">
            Training Fee is $50 - Confirm you're willing to participate by
            clicking Yes
          </p>
          <div className="flex space-x-4">
            <label className="flex items-center w-full text-black">
              <input
                type="radio"
                value="Yes"
                {...register("confirmation")}
                className="sr-only"
              />
              <span
                className={`flex items-center w-full gap-5 px-6 py-3 rounded-md text-sm ${
                  errors.confirmation ? "border border-red-300" : ""
                } ${
                  watch("confirmation") === "Yes"
                    ? "bg-brand-100 border border-brand-600 text-brand-800"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                    watch("confirmation") === "Yes"
                      ? "bg-brand-600 border-brand-600"
                      : "border-gray-400"
                  }`}
                >
                  {watch("confirmation") === "Yes" && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
                Yes
              </span>
            </label>

            <label className="flex items-center w-full">
              <input
                type="radio"
                value="No"
                {...register("confirmation")}
                className="sr-only"
              />
              <span
                className={`flex items-center gap-5 px-6 py-3 w-full rounded-md text-sm ${
                  (watch("confirmation") as "Yes" | "No" | undefined) === "No"
                    ? "bg-gray-200 border border-gray-400 text-gray-800"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                    (watch("confirmation") as "Yes" | "No" | undefined) === "No"
                      ? "bg-white border-gray-400"
                      : "border-gray-400"
                  }`}
                >
                  {(watch("confirmation") as "Yes" | "No" | undefined) ===
                    "No" && (
                    <span className="w-2 h-2 bg-grey-500 rounded-full"></span>
                  )}
                </span>
                No
              </span>
            </label>
          </div>
          {errors.confirmation && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmation.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Full Name</label>
          <input
            type="text"
            className={`w-full px-3 py-[10px] border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none bg-[#f2f2f2] focus:ring-1 focus:ring-brand-500 focus:border-brand-500`}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-black font-medium mb-2">
            Email address
          </label>
          <input
            type="email"
            className={`w-full px-3 py-[10px] border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none bg-[#f2f2f2] focus:ring-1 focus:ring-brand-500 focus:border-brand-500`}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-black font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className={`w-full px-3 py-[10px] border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none bg-[#f2f2f2] focus:ring-1 focus:ring-brand-500 focus:border-brand-500`}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-black font-medium mb-2">
            Enter Your LinkedIn Profile URL
          </label>
          <input
            type="url"
            className={`w-full px-3 py-[10px] border ${
              errors.linkedinUrl ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none bg-[#f2f2f2] focus:ring-1 focus:ring-brand-500 focus:border-brand-500`}
            {...register("linkedinUrl")}
          />
          {errors.linkedinUrl && (
            <p className="mt-1 text-sm text-red-600">
              {errors.linkedinUrl.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-black font-medium mb-2">
            Which Country are you currently residing?
          </label>
          <div className="relative">
            <select
              className={`w-full px-3 py-[10px] border ${
                errors.country ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none bg-[#f2f2f2] focus:ring-1 focus:ring-brand-500 focus:border-brand-500 appearance-none`}
              {...register("country")}
            >
              <option value="">Select Country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          </div>
          {errors.country && (
            <p className="mt-1 text-sm text-red-600">
              {errors.country.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-black font-medium mb-2">
            Rate your Power BI knowledge on a scale of 1-10 (this is not a
            beginner class).
          </label>
          <Controller
            name="powerBiKnowledge"
            control={control}
            render={({ field }) => (
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <label key={value} className="flex flex-col items-center">
                    <span className="mb-1">{value}</span>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer
                      ${
                        field.value === value
                          ? "bg-brand-600 border-brand-600"
                          : "border-gray-300 bg-white"
                      }`}
                      onClick={() => field.onChange(value)}
                    >
                      {field.value === value && (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            )}
          />
          {errors.powerBiKnowledge && (
            <p className="mt-1 text-sm text-red-600">
              {errors.powerBiKnowledge.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <p className="text-black font-medium mb-2">
            Training is Weekends Only Saturdays and Sundays and Time is 1pm -
            4pm GMT+1 - Does this work with you?
          </p>
          <div className="flex space-x-4">
            <label className="flex items-center w-full">
              <input
                type="radio"
                value="Yes"
                {...register("timeConfirmation")}
                className="sr-only"
              />
              <span
                className={`flex items-center gap-5 px-6 py-3 w-full rounded-md text-sm ${
                  errors.timeConfirmation ? "border border-red-300" : ""
                } ${
                  watch("timeConfirmation") === "Yes"
                    ? "bg-brand-100 border border-brand-600 text-brand-800"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                    watch("timeConfirmation") === "Yes"
                      ? "bg-brand-600 border-brand-600"
                      : "border-gray-400"
                  }`}
                >
                  {watch("timeConfirmation") === "Yes" && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
                Yes
              </span>
            </label>

            <label className="flex items-center w-full">
              <input
                type="radio"
                value="No"
                {...register("timeConfirmation")}
                className="sr-only"
              />
              <span
                className={`flex items-center gap-5 px-6 py-3 w-full rounded-md text-sm ${
                  watch("timeConfirmation") === "No"
                    ? "bg-gray-200 border border-gray-400 text-gray-800"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                    watch("timeConfirmation") === "No"
                      ? "bg-white border-gray-400"
                      : "border-gray-400"
                  }`}
                >
                  {watch("timeConfirmation") === "No" && (
                    <span className="w-2 h-2 bg-grey-500 rounded-full"></span>
                  )}
                </span>
                No
              </span>
            </label>
          </div>
          {errors.timeConfirmation && (
            <p className="mt-1 text-sm text-red-600">
              {errors.timeConfirmation.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <p className="text-black font-medium mb-2">
            Commitment Oath - Are you willing and able to commit 4 weeks to
            attend this training and perform all the necessary task and
            projects?
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <label className="flex items-center w-full">
              <input
                type="radio"
                value="Yes"
                {...register("commitmentOath")}
                className="sr-only"
              />
              <span
                className={`flex items-center gap-5 px-6 py-3 w-full rounded-md text-sm ${
                  errors.commitmentOath ? "border border-red-300" : ""
                } ${
                  watch("commitmentOath") === "Yes"
                    ? "bg-brand-100 border border-brand-600 text-brand-800"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                    watch("commitmentOath") === "Yes"
                      ? "bg-brand-600 border-brand-600"
                      : "border-gray-400"
                  }`}
                >
                  {watch("commitmentOath") === "Yes" && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
                Yes
              </span>
            </label>

            <label className="flex items-center w-full">
              <input
                type="radio"
                value="No"
                {...register("commitmentOath")}
                className="sr-only"
              />
              <span
                className={`flex items-center gap-5 px-6 py-3 w-full rounded-md text-sm ${
                  (watch("commitmentOath") as "Yes" | "No" | "Maybe") === "No"
                    ? "bg-gray-200 border border-gray-400 text-gray-800"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                    (watch("commitmentOath") as "Yes" | "No" | "Maybe") === "No"
                      ? "bg-white border-gray-400"
                      : "border-gray-400"
                  }`}
                >
                  {(watch("commitmentOath") as "Yes" | "No" | "Maybe") ===
                    "No" && (
                    <span className="w-2 h-2 bg-grey-500 rounded-full"></span>
                  )}
                </span>
                No
              </span>
            </label>

            <label className="flex items-center w-full">
              <input
                type="radio"
                value="Maybe"
                {...register("commitmentOath")}
                className="sr-only"
              />
              <span
                className={`flex items-center gap-5 px-6 py-3 w-full rounded-md text-sm ${
                  (watch("commitmentOath") as "Yes" | "No" | "Maybe") ===
                  "Maybe"
                    ? "bg-gray-200 border border-gray-400 text-gray-800"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                    (watch("commitmentOath") as "Yes" | "No" | "Maybe") ===
                    "Maybe"
                      ? "bg-white border-gray-400"
                      : "border-gray-400"
                  }`}
                >
                  {(watch("commitmentOath") as "Yes" | "No" | "Maybe") ===
                    "Maybe" && (
                    <span className="w-2 h-2 bg-grey-500 rounded-full"></span>
                  )}
                </span>
                Maybe
              </span>
            </label>
          </div>
          {errors.commitmentOath && (
            <p className="mt-1 text-sm text-red-600">
              {errors.commitmentOath.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="flex items-start text-black">
            <input
              type="checkbox"
              className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 checked:bg-brand-600 checked:border-brand-600 data-[state=checked]:bg-brand-500 data-[state=checked]:text-slate-50 dark:border-slate-50"
              {...register("termsAgreement")}
            />

            <span className="text-sm">
              I understand that I will have to pay $50 to book my sit for the
              training and its on a first come basis.
            </span>
          </label>
          {errors.termsAgreement && (
            <p className="mt-1 text-sm text-red-600">
              {errors.termsAgreement.message}
            </p>
          )}
        </div>

        <div className="pt-10">
          <button
            type="submit"
            className={`${
              !isValid ? "bg-grey-300" : "bg-brand-600 hover:bg-brand-700"
            } w-full text-white py-3 rounded-md  transition-colors disabled:opacity-70`}
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? "Sending..." : "Send Enrollment Form"}
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default EnrollmentForm;
