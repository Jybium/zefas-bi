import React from "react";
import Button from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-12 md:py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to See the Power of Your Data?
          </h2>
          <p className="text-grey-700 text-lg max-w-3xl mx-auto">
            Start transforming your business today with data-driven insights and
            intelligent analytics solutions.
          </p>
        </div>

        <div className="flex justify-center">
          <Button href="/get-started" size="lg">
            Get Started
          </Button>
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="/api/placeholder/600/200"
                alt="Data visualization chart"
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
