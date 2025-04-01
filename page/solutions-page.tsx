"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionsPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const industries = [
    { id: "all", name: "All Industries" },
    { id: "finance", name: "Finance" },
    { id: "healthcare", name: "Healthcare" },
    { id: "retail", name: "Retail" },
    { id: "manufacturing", name: "Manufacturing" },
  ];

  // Solution categories
  const solutions = [
    {
      id: "financial-reports",
      title: "Financial Business Reports",
      description:
        "Comprehensive financial analytics and reporting solutions for businesses of all sizes.",
      industries: ["all", "finance"],
      image: "/api/placeholder/400/200",
      isHighlighted: true,
    },
    {
      id: "sales-analytics",
      title: "Sales Performance Analytics",
      description:
        "Track and optimize your sales performance with interactive dashboards and reports.",
      industries: ["all", "retail", "finance"],
      image: "/api/placeholder/400/200",
    },
    {
      id: "inventory-management",
      title: "Inventory Management Solutions",
      description:
        "Real-time inventory tracking and optimization tools for better resource management.",
      industries: ["all", "retail", "manufacturing"],
      image: "/api/placeholder/400/200",
    },
    {
      id: "ms-data-integration",
      title: "Microsoft Data Integration",
      description:
        "Seamless integration with Microsoft's data ecosystem including Power BI, Azure, and Excel.",
      industries: ["all"],
      image: "/api/placeholder/400/200",
    },
    {
      id: "data-warehousing",
      title: "Data Warehousing Solutions",
      description:
        "Build robust data warehouses for consolidated reporting and analytics.",
      industries: ["all", "finance", "healthcare", "retail", "manufacturing"],
      image: "/api/placeholder/400/200",
    },
    {
      id: "healthcare-analytics",
      title: "Healthcare Analytics Suite",
      description:
        "Specialized analytics solutions for healthcare providers and insurers.",
      industries: ["all", "healthcare"],
      image: "/api/placeholder/400/200",
    },
  ];

  // Filter solutions based on selected industry
  const filteredSolutions = solutions.filter((solution) =>
    solution.industries.includes(selectedIndustry)
  );

  // Training features
  const trainingFeatures = [
    "Customized corporate training programs",
    "Hands-on workshops with real business scenarios",
    "Expert-led sessions for all experience levels",
    "Certification preparation and guidance",
  ];

  // Performance metrics for chart
  const performanceData = [
    { label: "Before", value: 45 },
    { label: "After", value: 85 },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h1 className="text-3xl font-bold text-gray-900">Our Solutions</h1>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl">
            Zefas BI offers a comprehensive suite of business intelligence
            solutions designed to transform your raw data into actionable
            insights.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
        {/* Industry filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Select Your Industry / Use Case
          </h2>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedIndustry === industry.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedIndustry(industry.id)}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Solutions grid */}
        <div className="space-y-8">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className={`bg-gray-100 rounded-lg overflow-hidden shadow-md ${
                solution.isHighlighted ? "border-l-4 border-green-600" : ""
              }`}
            >
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    solution.isHighlighted ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {solution.title}
                </h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Solution preview image
                  </span>
                </div>
                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training section */}
        <div className="mt-12 bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Corporate Power BI Training
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                {trainingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/training"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Explore Training Options
                </Link>
              </div>
            </div>
            <div>
              <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500 text-sm">Training image</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to See the Power of Your Data?
              </h2>
              <p className="text-gray-700 mb-6">
                Our solutions typically improve business decision-making speed
                by 65% and reduce reporting costs by 40%.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
            <div>
              {/* Simple bar chart visualization */}
              <div className="h-64 w-full flex items-end justify-around p-4 bg-white rounded-lg shadow-inner">
                {performanceData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-16 ${
                        index === 0 ? "bg-red-400" : "bg-green-500"
                      }`}
                      style={{ height: `${item.value * 2}px` }}
                    ></div>
                    <div className="mt-2 text-sm font-medium">{item.label}</div>
                    <div className="text-sm font-bold">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
