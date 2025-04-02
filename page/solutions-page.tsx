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

  const powerBIReports = [
    {
      id: 1,
      title: "E-Commerce Sales KPI Report",
      description:
        "The project helped the client identify profitability drivers, optimize sales strategies, and target high-performing segments. Insights led to a 15% profit margin, 20% sales growth, and 30% corporate segment growth. High-performing markets exceeding $400K in sales were identified, while underperforming regions were addressed.",
      image: "/api/placeholder/600/350",
      link: (
        <iframe
          title="Okeh Efasa E- Commerce Report"
          width="1280"
          className="absolute top-0 left-0 w-full h-full border-none"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiOWVkMjRmMmUtNTQzOC00ZTQwLWJkZTUtYzY5ZDg0YjgwNGQxIiwidCI6IjZlMjY5MzE1LWM2NTAtNDM3Zi1iMzE3LTFhODQyOWRlZjM3MyJ9"
          // frameborder="0"
          allowFullScreen={true}
        ></iframe>
      ),
    },
    {
      id: 2,
      title: "Electronic Products Ratings and Reviews Analysis",
      description:
        "The project helped the client understand how reviews and ratings influence product sales and brand popularity. By analyzing diverse product and brand reviews, I identified top-performing and highly recommended products. This insight enabled the client to optimize their product offerings and marketing strategies.",
      image: "/api/placeholder/600/350",
      link: (
        <iframe
          title="Electronics Rating"
          width="1280"
          height="373.5"
          className="absolute top-0 left-0 w-full h-full border-none"
          src="https://app.powerbi.com/view?r=eyJrIjoiM2RkOWJiN2ItMDIyZi00ODMyLThhYzAtOWJiODMwZTI2YmIwIiwidCI6IjZlMjY5MzE1LWM2NTAtNDM3Zi1iMzE3LTFhODQyOWRlZjM3MyJ9"
          // frameborder="0"
          allowFullScreen={true}
        ></iframe>
      ),
    },
    {
      id: 3,
      title: "Comprehensive Supply Chain Management Report",
      description:
        "The report provided key insights into supply chain performance, helping the client optimize operations. It evaluated supply efficiency, manufacturing capacity, defect rates, logistics, and inventory management. Additionally, it identified sales and profitability drivers across products, regions, and customer segments.",
      image: "/api/placeholder/600/350",
      link: (
        <iframe
          title="Supplychain Okeh Efasa"
          width="1280"
          height="373.5"
          className="absolute top-0 left-0 w-full h-full border-none"
          src="https://app.powerbi.com/view?r=eyJrIjoiYzUyMTlhMDEtYmFkNS00NmUzLWFmMTItMzFiMjZlZDE2OGVkIiwidCI6IjZlMjY5MzE1LWM2NTAtNDM3Zi1iMzE3LTFhODQyOWRlZjM3MyJ9"
          // frameborder="0"
          allowFullScreen={true}
        ></iframe>
      ),
    },
    {
      id: 4,
      title:
        "Marketing Campaign Analysis Channel Performance and Traffic Analysis",
      description:
        "The report helped the client track campaign success across channels and locations using key KPIs. It measured performance through Conversion Rate, Engagement Rate, and ROAS, assessing user actions and revenue. Visibility and engagement were analyzed using Impressions, Clicks, and CTR.",
      image: "/api/placeholder/600/350",
      link: (
        <iframe
          title="Marketing Campaign Analysis"
          width="1280"
          className="absolute top-0 left-0 w-full h-full border-none"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzYwYmI5NzAtODRiMC00ZWViLWIxNTktN2U4YjBiMGE5YjQ0IiwidCI6IjZlMjY5MzE1LWM2NTAtNDM3Zi1iMzE3LTFhODQyOWRlZjM3MyJ9"
          // frameborder="0"
          allowFullScreen={true}
        ></iframe>
      ),
    },
    {
      id: 5,
      title: "HR - Employee Productivity Dashboard",
      description:
        "This project helped HR by providing a three-page report analyzing workforce demographics, performance, and key trends. It examined gender equality, pay bias, and productivity using weighted metrics for performance and productivity. Key KPI trends like retention, turnover, and attendance rates were also evaluated.",
      image: "/api/placeholder/600/350",
      link: (
        <iframe
          title="Employee Productivity Okeh Efasa"
          className="absolute top-0 left-0 w-full h-full border-none"
          width="1280"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiZTkzOGJmMmUtOTk1Zi00MmJhLTg3NTItYTllYWMwYjYxNTBiIiwidCI6IjZlMjY5MzE1LWM2NTAtNDM3Zi1iMzE3LTFhODQyOWRlZjM3MyJ9"
          // frameborder="0"
          allowFullScreen={true}
        ></iframe>
      ),
    },
  ];

  const microsoftFabricIntegration = [
    {
      id: 1,
      title: "Bank Risk Assessment and Performance Report",
      description:
        "Aurora Bank used the report for insights into loan activities, risk assessment, and customer behavior. It identified demographic patterns, assessed financial health through Debt-to-Income Ratios, and analyzed transaction trends to guide strategy.",
      image: "/api/placeholder/600/350",
      link: (
        <iframe
          title="Aurora_Bank - Efasa"
          width="600"
          height="373.5"
          className="absolute top-0 left-0 w-full h-full border-none"
          src="https://app.powerbi.com/view?r=eyJrIjoiYzMwZjJmMjgtMGE3OC00MzYxLThkNmUtMWI2ZDcwYTI1NDZiIiwidCI6IjZlMjY5MzE1LWM2NTAtNDM3Zi1iMzE3LTFhODQyOWRlZjM3MyJ9"
          // frameBorder={0}
          allowFullScreen={true}
        ></iframe>
      ),
    },
    {
      id: 2,
      title: "Finance Report ",
      description:
        "This project provided a comprehensive analysis of key financial KPIs, offering insights into revenue, profitability, costs, and growth trends. It covered revenue by business line, profit margins, operational efficiency, and expense breakdowns. The report helped the fitness company track performance and optimize financial strategies.",
      image: "/api/placeholder/600/350",
      link: (
        <iframe
          title="Sport Finance Overview"
          width="1280"
          height="373.5"
          className="absolute top-0 left-0 w-full h-full border-none"
          src="https://app.powerbi.com/view?r=eyJrIjoiMTI4ZDk3ZDMtYmQxNi00OTdhLWJiZjYtZjU2OTgzMGRjMjE3IiwidCI6IjZlMjY5MzE1LWM2NTAtNDM3Zi1iMzE3LTFhODQyOWRlZjM3MyJ9"
          // frameborder="0"
          allowFullScreen={true}
        ></iframe>
      ),
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
            reports={microsoftFabricIntegration}
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
