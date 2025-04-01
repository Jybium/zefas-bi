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
const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  helpType: z.string().min(1, "Please select how we can help"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  contactMethod: z.string().min(1, "Please select a contact method"),
  email: z.string().email("Invalid email address"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Help type options
const helpTypeOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "sales", label: "Sales Questions" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership Opportunities" },
];

// Contact method options
const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone Call" },
  { value: "zoom", label: "Zoom Meeting" },
];

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Handle form submission logic here
    console.log("Form submitted:", data);

    // You would typically make an API call here:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  };

  return (
    <PageLayout title="Contact Us" description="Get in touch with our team">
      <div className="flex flex-col lg:flex-row min-h-screen gap-x-12">
        <SideImageSection
          pageText="Have questions about our solutions, trainings, or how we help businesses make sense of data insights? We'd love to help."
          pageTitle="Contact Us"
          imageSrc="https://res.cloudinary.com/ddynvenje/image/upload/v1742835803/zefasbi/contact-us_hwdbwr.svg"
          imageAlt="Customer service representative"
        />

        <FormSection title="Fill out the form below and we ‘ll be in touch shortly.">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <TextField
              id="fullName"
              label="Full Name"
              placeholder="Your full name"
              register={register("fullName")}
              error={errors.fullName}
              required
            />

            <SelectField
              id="helpType"
              label="How can we help?"
              options={helpTypeOptions}
              register={register("helpType")}
              error={errors.helpType}
              required
              placeholder="Select an option"
            />

            <TextAreaField
              id="message"
              label="Message"
              placeholder="Tell us more about your inquiry"
              register={register("message")}
              error={errors.message}
              required
              rows={5}
            />

            <SelectField
              id="contactMethod"
              label="How would we get in touch with you?"
              options={contactMethodOptions}
              register={register("contactMethod")}
              error={errors.contactMethod}
              required
              placeholder="Select an option"
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

            <p className="text-sm text-grey-600 font-medium leading-[130%]">
              Please note that Zefas is committed to protecting your privacy.
            </p>

            <div className="mt-8">
              <SubmitButton label="Submit" isLoading={isSubmitting} />
            </div>
          </form>

          {/* <div className="mt-12">
            <NewsletterSignup />
          </div> */}
        </FormSection>
      </div>
    </PageLayout>
  );
};

export default ContactUsPage;
