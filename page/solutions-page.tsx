"use client";

import React, { useState } from "react";
import Image from "next/image";
import SolutionDetail from "@/components/layout/solution-layout";
import CTASection from "@/components/home/cta-section";
import CorporateTrainingSection from "@/components/layout/corporate-training-testimonial";
import { useRouter } from "next/navigation";

const SolutionsPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const navigate = useRouter();

  const industries = [
    { id: "all", name: "All " },
    { id: "power-bi-reports", name: "Power BI Reports" },
    {
      id: "microsoft-fabric-integration",
      name: "Microsoft Fabric Integration",
    },
    { id: "corporate-power-bi-training", name: "Corporate Power BI Training" },
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

  const powerBIReports = [
    {
      id: 1,
      title: "Financial Dashboard",
      description: "A little description of what this is about",
      image: "/api/placeholder/600/350",
    },
    {
      id: 2,
      title: "Sales Analytics",
      description: "A little description of what this is about",
      image: "/api/placeholder/600/350",
    },
    {
      id: 3,
      title: "Executive Overview",
      description: "A little description of what this is about",
      image: "/api/placeholder/600/350",
    },
  ];

  return (
    <div
      className="bg-white min-h-screen bg-gradient-to-b from-[#EFF3E6] to-white"
      id="all"
    >
      {/* Header section */}
      <div className="py-6 lg:pt-16 lg:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 space-y-2">
          <h1 className="text-3xl lg:text-6xl font-semibold text-black leading-[100%]">
            Our Solutions
          </h1>
          <p className="mt-2 text-lg lg:text-xl text-grey-900 max-w-3xl leading-[170%]">
            At Zefas BI & Analytics, we focus on delivering tailored solutions
            that simplify complex data and empower businesses to make smarter,
            faster decisions. Using cutting-edge tools like Power BI, Microsoft
            Fabric, and SQL, we create solutions designed to address your unique
            challenges and goals.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 sm:px-6 lg:px-20 py-8">
        {/* Industry filter */}
        <div className="mb-5">
          <h2 className="text-xl lg:text-3xl font-semibold mb-4 text-brand-800">
            Here's how we make a difference:
          </h2>

          <div className="space-y-2">
            <h3 className="text-black leading-[160%] font-semibold">
              CATEGORIES
            </h3>
            <div className="flex justify-between gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide snap-x snap-mandatory lg:snap-none">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  className={`grow px-10 lg:px-4 py-3 rounded-md text-sm min-w-[156px w-full h-[56px] lg:w-full lg:h-auto font-medium transition-colors snap-start lg:snap-none ${
                    selectedIndustry === industry.id
                      ? "bg-brand-500 text-white"
                      : "bg-grey-50 text-grey-800 hover:bg-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedIndustry(industry.id);
                    navigate.push(`/solutions/#${industry.id}`);
                  }}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions grid */}
        <div className="space-y-8">
          <SolutionDetail
            title="Power Bi Reports"
            text="We design and develop intuitive, interactive, and data-driven reports that enable you to visualize your business performance and uncover growth opportunities."
            reports={powerBIReports}
          />

          <Image
            src="https://res.cloudinary.com/ddynvenje/image/upload/v1743470457/zefasbi/Frame_1618868642_fzzwhy.svg"
            alt="demarcating line"
            width={1240}
            height={24}
            className="w-full h-auto"
          />

          <SolutionDetail
            title="Microsoft Fabric Integration"
            text="Seamlessly integrate Microsoft Fabric into your analytics ecosystem to unlock advanced data processing, storage, and management capabilities."
            reports={powerBIReports}
          />

          <Image
            src="https://res.cloudinary.com/ddynvenje/image/upload/v1743470457/zefasbi/Frame_1618868642_fzzwhy.svg"
            alt="demarcating line"
            width={1240}
            height={24}
            className="w-full h-auto"
          />

          <CorporateTrainingSection />
        </div>

        {/* CTA section */}
        <CTASection />
      </div>
    </div>
  );
};

export default SolutionsPage;
