"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageLayout } from "@/components/layout/form-layout";
import { FormSection } from "@/components/layout/form-section";
import { SideImageSection } from "@/components/layout/side-image-section";
import { TextField } from "@/components/ui/text-field";
import { SelectField } from "@/components/ui/select-field";
import { TextAreaField } from "@/components/ui/textarea-field";
import { SubmitButton } from "@/components/ui/submit-button";
import { NewsletterSignup } from "@/components/layout/newsletter-signup";

// Form validation schema
const getStartedFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Please select your country"),
  interestedSolutions: z.string().min(1, "Please select a solution"),
  message: z.string().optional(),
});

type GetStartedFormData = z.infer<typeof getStartedFormSchema>;

// Country options (abbreviated)
const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "it", label: "Italy" },
  { value: "ng", label: "Nigeria" },
];

// Solutions options
const solutionOptions = [
  { value: "enterprise", label: "Enterprise Solutions" },
  { value: "smallbusiness", label: "Small Business Solutions" },
  { value: "cloud", label: "Cloud Integration" },
  { value: "ai", label: "AI & Data Analytics" },
  { value: "security", label: "Security Services" },
  { value: "training", label: "Training Programs" },
];

const GetStartedPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GetStartedFormData>({
    resolver: zodResolver(getStartedFormSchema),
  });

  const onSubmit = async (data: GetStartedFormData) => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Handle form submission logic here
    console.log("Form submitted:", data);

    // You would typically make an API call here:
    // const response = await fetch('/api/get-started', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  };

  return (
    <PageLayout title="Get Started" description="Begin your journey with Zefas">
      <div className="flex flex-col lg:flex-row min-h-screen gap-x-12">
        <SideImageSection
          pageText={
            <>
              Thank you for showing interest in our services. <br />
              Filling the form will help us know what you are interested in and
              how we can provide tailored services to you.
            </>
          }
          pageTitle="Get Started"
          imageSrc="https://res.cloudinary.com/ddynvenje/image/upload/v1742835803/zefasbi/contact-us_hwdbwr.svg"
          imageAlt="Customer service representative"
        />

        <FormSection title="Fill out the form below and we ‘ll be in touch shortly.">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextField
              id="fullName"
              label="Full Name"
              placeholder="Your full name"
              register={register("fullName")}
              error={errors.fullName}
              required
            />

            <TextField
              id="email"
              label="Email address"
              placeholder="your.email@example.com"
              register={register("email")}
              error={errors.email}
              required
              type="email"
            />

            <SelectField
              id="country"
              label="Country"
              options={countryOptions}
              register={register("country")}
              error={errors.country}
              required
              placeholder="Select your country"
            />

            <SelectField
              id="interestedSolutions"
              label="Which of our solutions are you interested in?"
              options={solutionOptions}
              register={register("interestedSolutions")}
              error={errors.interestedSolutions}
              required
              placeholder="Select a solution"
            />

            <TextAreaField
              id="message"
              label="Message"
              placeholder="Any additional information you'd like to share"
              register={register("message")}
              error={errors.message}
              rows={5}
            />

            <p className="text-sm text-grey-600 font-medium leading-[130%]">
              Please note that Zefas is committed to protecting your privacy.
            </p>

            <div className="mt-8">
              <SubmitButton label="Send Message" isLoading={isSubmitting} />
            </div>
          </form>
        </FormSection>
      </div>
    </PageLayout>
  );
};
export default GetStartedPage;
