import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import Hero from "@/components/home/hero-section";
import Solutions from "@/components/home/solution-section";
import PortfolioBuilder from "@/components/home/portfolio-builder";
import CTASection from "@/components/home/cta-section";
import Image from "next/image";
import Button from "@/components/ui/button";
import { Users, Users2, Sparkles } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import Testimonials from "@/components/home/testimonial-section";

const WhyChooseUsComponent = () => {
  const reasons = [
    {
      title: "Personalized Solutions",
      description:
        "Every business is different, so we tailor our services just for you.",
      icon: <Users size={24} className="text-green-700" />,
    },
    {
      title: "Expert Team",
      description: "We’re data pros with years of experience.",
      icon: <Users2 size={24} className="text-green-700" />,
    },
    {
      title: "Real Results",
      description: "We focus on driving measurable outcomes for your business.",
      icon: <Sparkles size={24} className="text-green-700" />,
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Why Choose Us</h2>
          <p className="text-gray-500 mt-2">
            Your goals, powered by our expertise...
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Icon Box */}
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-lg mx-auto">
                {reason.icon}
              </div>
              {/* Title & Description */}
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const YoutubeSubscribe = () => {
  return (
    <section className="relative py-16 bg-[#FAFAF7]">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/pattern.svg')] opacity-40"></div>
      <div className="absolute -top-10 left-[-30px] w-24 h-24 bg-green-300 rounded-full blur-xl opacity-50"></div>
      <div className="absolute bottom-10 right-[-30px] w-24 h-24 bg-green-300 rounded-full blur-xl opacity-50"></div>

      {/* Main Card */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-[#F3F6F1] rounded-lg shadow-lg text-center p-10">
          {/* Badge */}
          <p className="text-green-600 font-medium italic text-sm">
            500+ Subscribers and counting...
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-900 mt-2 flex items-center justify-center gap-2">
            Subscribe to Our YouTube{" "}
            <FaYoutube className="text-red-600 text-3xl" />
            Channel
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-2">
            Join our YouTube community for practical tips, how-to guides, and
            real-world insights on using data to grow your business.
          </p>

          {/* Subscribe Button */}
          <div className="mt-6">
            <a
              href="https://www.youtube.com/channel/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-green-800 transition"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ZefasBI - Empowering Your Business Through Data Insights</title>
        <meta
          name="description"
          content="Transform your raw data into actionable business intelligence with our powerful analytics solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <section className="pb-12 bg-white">
        <div className="flex items-center gap-x-11 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold leading-[140%]">
              We Make Data Work for You...
            </h2>
            <p className="text-grey-700 text-lg max-w-3xl mx-auto leading-[170%]">
              At Zefas BI & Analytics, we specialize in turning raw data into
              actionable insights. Using tools like Power BI, Microsoft Fabric,
              and SQL, we create easy-to-understand reports and dashboards that
              help you work smarter, not harder.
            </p>
            <Button href="/contact" size="lg" className="">
              Get Started
            </Button>
          </div>

          <Image
            src="https://res.cloudinary.com/ddynvenje/image/upload/v1742851543/zefasbi/chart_fizf8y.svg"
            alt="Data chart"
            width={622}
            height={534}
            className="mx-auto"
          />
        </div>
      </section>
      <Solutions />
      <PortfolioBuilder />
      <Testimonials />
      <WhyChooseUsComponent />
      <CTASection />
      <YoutubeSubscribe />
    </>
  );
}
