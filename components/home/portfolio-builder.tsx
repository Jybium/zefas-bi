import React from "react";
import Image from "next/image";
import Button from "../ui/button";

const PortfolioBuilder = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-[65px] font-semibold text-black mb-4 leading-[1.2]">
                Power BI Portfolio Builder
              </h1>
              <span className="text-xl font-semibold">
                Price: <span className="text-brand-600">$50</span>
              </span>
            </div>

            <div className="lg:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                Our Online Training is designed to empower your team with the
                skills they need to create insightful dashboards and reports.
                Whether you're just starting out or looking to sharpen your
                expertise, we’ve got you covered.
              </p>

              <h3 className="text-lg font-semibold mb-2">What You'll Get:</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li className="flex items-center">
                  ✅ Hands-on sessions tailored to your business needs
                </li>
                <li className="flex items-center">
                  ✅ A portfolio that showcases your expertise with
                  evidence-based projects
                </li>
                <li className="flex items-center">
                  ✅ Ongoing support to help your team succeed
                </li>
              </ul>

              {/* Price and Enroll Button */}
              <div className="flex items-center gap-6">
                <Button
                  href="/training"
                  className="px-6 py-3 bg-brand-500 text-white font-semibold rounded-lg shadow-md hover:bg-brand-700 transition duration-300"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/ddynvenje/image/upload/v1742835807/zefasbi/enrol-now_jpqxst.svg"
              alt="Power BI Portfolio Builder"
              className="w-full "
              width={800}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBuilder;
