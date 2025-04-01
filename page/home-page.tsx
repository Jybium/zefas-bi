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
      icon: <Users size={24} className="text-brand-700" />,
    },
    {
      title: "Expert Team",
      description: "We’re data pros with years of experience.",
      icon: <Users2 size={24} className="text-brand-700" />,
    },
    {
      title: "Real Results",
      description: "We focus on driving measurable outcomes for your business.",
      icon: <Sparkles size={24} className="text-brand-700" />,
    },
  ];

  return (
    <section className="py-16 bg-[#FCFFF5]">
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
              <div className="relative w-14 h-14 flex items-center justify-center bg-brand-50 rounded-lg shadow-md mx-auto before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r before:from-[#EAFEBA] before:to-[#C5F550] before:p-[2px]">
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
    <section className="relative py-16 px-4 lg:px-20 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -left-10 top-24 w-20 h-20 lg:w-40 lg:h-40 bg-[#D6FE67] rounded-full opacity-50"></div>
      <div className="absolute -right-10 overflow-hidden bottom-24 w-20 h-20 lg:w-40 lg:h-40 bg-[#67FE99] rounded-full opacity-50"></div>

      <div className="px-4 py-20 lg:py-32 text-center bg-[#0986330A] backdrop-blur-xl rounded-lg">
        {/* Badge */}
        <p className="text-green-600 text-sm font-medium">
          500+ Subscribers and counting...
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mt-2 grid lg:flex items-center justify-center gap-2">
          Subscribe to Our YouTube{" "}
          <span className="text-red-600 rounded-md text-6xl mx-auto lg:mx-0">
            <FaYoutube />
          </span>{" "}
          Channel
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Join our YouTube community for practical tips, how-to guides, and
          real-world insights on using data to grow your business.
        </p>

        {/* Subscribe Button */}
        <div className="mt-6">
          <Button href="https://www.youtube.com/channel/YOUR_CHANNEL">
            Subscribe on YouTube
          </Button>
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

      <section className="py-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-9 lg:gap-y-0 lg:gap-x-11 px-4 sm:px-6 lg:px-20">
          <div className="space-y-8 lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold leading-[1.4]">
              We Make Data Work for You...
            </h2>
            <p className="text-grey-700 text-lg max-w-3xl mx-auto leading-[170%]">
              At Zefas BI & Analytics, we specialize in turning raw data into
              actionable insights. Using tools like Power BI, Microsoft Fabric,
              and SQL, we create easy-to-understand reports and dashboards that
              help you work smarter, not harder.
            </p>
            <Button href="/get-started" size="lg" className="">
              Get Started
            </Button>
          </div>

          <div className="lg:w-1/2">
            <Image
              src="https://res.cloudinary.com/ddynvenje/image/upload/v1742851543/zefasbi/chart_fizf8y.svg"
              alt="Data chart"
              width={622}
              height={534}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <Solutions />
      <PortfolioBuilder />
      <Testimonials />
      <WhyChooseUsComponent />
      <div className="px-4 lg:px-20">
        <CTASection />
      </div>
      <Image
        src="https://res.cloudinary.com/ddynvenje/image/upload/v1743470457/zefasbi/Frame_1618868642_fzzwhy.svg"
        alt="demarcating line"
        width={1240}
        height={24}
        className="w-full h-auto"
      />
      <YoutubeSubscribe />
    </>
  );
}
