import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import Hero from "@/components/home/hero-section";
import Solutions from "@/components/home/solution-section";
import PortfolioBuilder from "@/components/home/portfolio-builder";
import CTASection from "@/components/home/cta-section";

// WhyChooseUs component
const WhyChooseUsComponent = () => {
  const reasons = [
    {
      title: "Professional Solutions",
      description:
        "Expert-crafted, tailored data solutions for your business needs.",
    },
    {
      title: "Expert Team",
      description:
        "Work with industry veterans who understand your data challenges.",
    },
    {
      title: "Results Driven",
      description:
        "Focused on delivering measurable business outcomes from your data.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-grey-100 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-grey-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// YouTubeSubscribe component
const YouTubeSubscribeComponent = () => {
  return (
    <section className="py-12 bg-grey-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Subscribe to Our YouTube Channel
        </h2>
        <p className="text-grey-700 mb-6">
          Get the latest data insights, tutorials, and industry trends directly
          to your inbox.
        </p>
        <div className="flex justify-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>reFix - Empowering Your Business Through Data Insights</title>
        <meta
          name="description"
          content="Transform your raw data into actionable business intelligence with our powerful analytics solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              We Make Data Work for You...
            </h2>
            <p className="text-grey-700 text-lg max-w-3xl mx-auto">
              Our expert team transforms complex data into clear, actionable
              insights that drive business growth and operational efficiency.
            </p>
          </div>
        </div>
      </section>
      <Solutions />
      <PortfolioBuilder />
      <WhyChooseUsComponent />
      <CTASection />
      <YouTubeSubscribeComponent />
    </Layout>
  );
}
