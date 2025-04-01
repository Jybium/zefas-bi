import React, { ReactNode } from "react";

interface FormSectionProps {
  children: ReactNode;
  title: string;
  //   description: string;
}

export const FormSection = ({
  children,
  title,
}: //   description,
FormSectionProps) => {
  return (
    <div className="w-full lg:w-1/2 p-4 lg:p-8 border border-[#F2F2F2] rounded-lg bg-white shadow-md ">
      <h1 className="text-2xl lg:text-4xl font-semibold text-brand-800 mb-4">
        {title}
      </h1>
      {children}
    </div>
  );
};
