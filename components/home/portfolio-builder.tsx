import React from "react";
import Button from "@/components/ui/button";

const PortfolioBuilder = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="inline-block bg-brand-100 text-brand-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                New
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Power BI Portfolio Builder
            </h2>
            <p className="text-grey-700 mb-6">
              Create impressive data visualization portfolios that showcase your
              analytical capabilities to clients and stakeholders. Our portfolio
              builder makes it easy to present your insights in a professional
              format.
            </p>
            <Button href="/portfolio-builder">Learn More</Button>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/api/placeholder/600/400"
                alt="Power BI Portfolio Builder interface"
                className="w-full h-auto"
              />
              {/* Pink circular indicator */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBuilder;
