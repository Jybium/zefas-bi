import React from "react";
import Button from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              Empowering Your Business Through{" "}
              <span className="text-brand-500">Data Insights</span>
            </h1>
            <p className="text-grey-700 mb-8 text-lg">
              Transform your raw data into actionable business intelligence with
              our powerful analytics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="/demo" variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/api/placeholder/600/400"
                alt="Data dashboard example"
                className="w-full h-auto"
              />
              {/* Pink circular indicator */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
