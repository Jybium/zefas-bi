"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { RatingScale } from "@/components/ui/rating-scale";
import { Card } from "@/components/ui/card-layout";
import Image from "next/image";
import EnrollmentForm from "./enrollment-form";

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  company: z.string().optional(),
  yearsExperience: z.string(),
  toolExperience: z.number().min(1, { message: "Please rate your experience" }),
  preferredTime: z.string(),
  additionalNotes: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const PortfolioBuilderForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);

    try {
      // In a real application, you would send this data to your API
      console.log("Form submitted:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-3xl mx-auto my-8">
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your training form has been submitted successfully. We'll contact
            you shortly with more details.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setIsSubmitted(false);
            }}
          >
            Submit Another Form
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="sticky top-8">
            <p className="text-3xl lg:text-7xl font-bold text-black mb-2 leading-[133%]">
              Power BI Portfolio Builder
            </p>
            <p className="text-xl lg:text-2xl text-grey-900 mb-6 leading-[130%]">
              Price:{" "}
              <span className="text-4xl font-semibold text-brand-600 mb-6">
                $50
              </span>
            </p>

            <div className="prose mb-8">
              <p>
                Fill out the form to register for the training. Our expert
                instructor will help you build a professional Power BI portfolio
                that will help you land your dream job.
              </p>
              <ul className="list-disc ml-5 mt-4 space-y-2">
                <li>Data preparation techniques with Power Query</li>
                <li>Creating compelling data models with DAX</li>
                <li>Building interactive dashboards with advanced visuals</li>
                <li>Best practices for enterprise implementations</li>
              </ul>
            </div>

            <div className="mb-8">
              <Image
                src="https://res.cloudinary.com/ddynvenje/image/upload/v1742835807/zefasbi/enrol-now_jpqxst.svg"
                alt="Power BI Instructor"
                className="rounded-lg shadow-md w-full"
                width={624}
                height={839}
              />
            </div>
          </div>
        </div>

        {/* <div className="lg:w-1/2">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Personal Details</h3>

              <Input
                label="Full Name"
                {...register("fullName")}
                error={errors.fullName?.message}
                placeholder="Enter your full name"
              />

              <Input
                label="Email Address"
                type="email"
                {...register("email")}
                error={errors.email?.message}
                placeholder="you@example.com"
              />

              <Input
                label="Phone Number"
                type="tel"
                {...register("phone")}
                error={errors.phone?.message}
                placeholder="Your phone number"
              />

              <Input
                label="Company (Optional)"
                {...register("company")}
                placeholder="Your company name"
              />

              <h3 className="text-lg font-semibold mt-8 mb-4">Experience</h3>

              <RadioGroup
                name="yearsExperience"
                label="Years of Power BI Experience"
                options={[
                  { value: "beginner", label: "Beginner (0-1 years)" },
                  { value: "intermediate", label: "Intermediate (1-3 years)" },
                  { value: "advanced", label: "Advanced (3+ years)" },
                ]}
                onChange={(value) =>
                  setValue("yearsExperience", value, { shouldValidate: true })
                }
              />

              <RatingScale
                id="toolExperience"
                label="How would you rate your experience with Power BI on a scale of 1-10?"
                maxRating={10}
                onChange={(rating) =>
                  setValue("toolExperience", rating, { shouldValidate: true })
                }
              />

              <h3 className="text-lg font-semibold mt-8 mb-4">
                Training Preferences
              </h3>

              <RadioGroup
                name="preferredTime"
                label="Preferred Training Time"
                options={[
                  { value: "weekday-morning", label: "Weekday Mornings" },
                  { value: "weekday-evening", label: "Weekday Evenings" },
                  { value: "weekend", label: "Weekends" },
                ]}
                onChange={(value) =>
                  setValue("preferredTime", value, { shouldValidate: true })
                }
              />

              <div className="mt-4">
                <label
                  htmlFor="additionalNotes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Any specific topics you'd like to cover?"
                  {...register("additionalNotes")}
                ></textarea>
              </div>

              <div className="flex items-center mt-6">
                <input
                  id="acceptTerms"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  {...register("acceptTerms")}
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I accept the terms and conditions
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.acceptTerms.message}
                </p>
              )}

              <div className="pt-4 w-full">
                <Button
                  type="submit"
                  className="w-full"
                  fullWidth
                  disabled={isSubmitting || !isValid}
                >
                  {isSubmitting ? "Submitting..." : "Register for Training"}
                </Button>
              </div>
            </form>
          </Card>
        </div> */}

        <EnrollmentForm />
      </div>
    </div>
  );
};
