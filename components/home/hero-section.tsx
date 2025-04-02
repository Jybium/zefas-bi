import React from "react";
import Button from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-12 md:pt-20">
      <div className="px-4 sm:px-6 lg:px-20 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-black leading-relaxed md:leading-loose lg:leading-[1.4]">
              Empowering Your Business Through{" "}
              <span className="text-brand-500">Data Insights</span>
            </h1>
          </div>

          <div className="space-y-3">
            <p className="text-xl leading-relaxed text-grey-900">
              With Zefas BI & Analytics, we help businesses like yours make
              sense of data and unlock growth opportunities.
            </p>
            <div className="flex w-full gap-4 items-center">
              <Button href="/get-started" size="lg" className="">
                Get Started
              </Button>
              <Image
                src="https://res.cloudinary.com/ddynvenje/image/upload/v1742835778/zefasbi/curly-arrow_yuqcbs.svg"
                alt="Curly arrow"
                height={112}
                width={112}
              />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/ddynvenje/image/upload/v1742835793/zefasbi/hero-section_s3scjx.svg"
              alt="Data dashboard example"
              height={692}
              width={1280}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
