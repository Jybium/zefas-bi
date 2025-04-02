"use client";

import React from "react";
import Image from "next/image";

interface SolutionDetailProps {
  title: string;
  text: string;
  reports: any[];
}

interface Report {
  id: number;
  title: string;
  description: string;
  image: string;
  link: React.ReactNode;
}

const SolutionDetail: React.FC<SolutionDetailProps> = ({
  title,
  text,
  reports,
}) => {
  return (
    <div
      className="min-h-screen"
      id={title.replaceAll(/\s+/g, "-").toLowerCase()}
    >
      <div className="">
        <section className="mb-16">
          <h2 className="text-2xl lg:text-5xl font-bold text-black mb-2 leading-[130%]">
            {title}
          </h2>
          <p className="text-grey-900 lg:text-xl leading-[170%] mb-6">{text}</p>

          <div className="space-y-10 lg:space-y-20">
            {(reports as Report[]).map((report: Report) => (
              <div key={report.id} className="rounded-md overflow-hidden">
                <div className="h-64 lg:h-[80vh] relative">{report.link}</div>
                <div className="p-3 text-justify">
                  <h2 className="text-xl lg:text-2xl font-bold text-black mb-2 leading-[130%]">
                    {report.title}
                  </h2>
                  <p className="text-sm lg:text-xl text-grey-800">
                    {report.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolutionDetail;
