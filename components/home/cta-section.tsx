import React from "react";
import Image from "next/image";
import Button from "../ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#FAFAF7]">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left - Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image
              height={440}
              width={601}
              src="https://res.cloudinary.com/ddynvenje/image/upload/v1742835778/zefasbi/call-to-action_sd6mfp.svg"
              alt="Data visualization chart"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-12 text-left lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Ready to See the <br className="hidden md:block" />
            Power of Your Data?
          </h2>
          <p className="text-gray-600 mt-3">
            Let’s work together to turn your data into decisions that matter.
          </p>

          {/* Button */}
          <div className="mt-6">
            <Button
              href="/get-started"
              className="bg-brand-500 text-white font-medium px-6 py-3 h-[60px] rounded-md shadow-md hover:bg-brand-800 transition"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
