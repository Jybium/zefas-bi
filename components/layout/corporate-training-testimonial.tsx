import React from "react";
import Image from "next/image";

const CorporateTrainingSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Our team's productivity skyrocketed after the training with Zefas BI & Analytics. The hands-on approach made it easy for even our less tech-savvy staff to create powerful dashboards and reports. We now rely on Power BI for real-time insights into our operations.",
      company: "Nilomu",
      location: "Lagos State, Nigeria",
      logo: "/api/placeholder/60/60", // Replace with actual logo
    },
    {
      id: 2,
      quote:
        "Zefas BI & Analytics exceeded our expectations. Their trainers were knowledgeable, patient, and adapted the sessions to suit our team's unique needs. The customized datasets they provided made the learning experience incredibly practical and relatable.",
      company: "Duplon",
      location: "Ogun State, Nigeria",
      logo: "/api/placeholder/60/60", // Replace with actual logo
    },
    {
      id: 3,
      quote:
        "This was the best investment we've made in upskilling our team. Zefas didn't just teach us how to use Power BI; they showed us how to think about data differently. The results have been transformative for our business decision-making process.",
      company: "Cremiolop",
      location: "Lagos State, Nigeria",
      logo: "/api/placeholder/60/60", // Replace with actual logo
    },
  ];

  return (
    <section className="" id="corporate-power-bi-training">
      <div className="">
        <h2 className="text-2xl lg:text-5xl font-bold text-black mb-2 leading-[130%]">
          Corporate Power BI Training
        </h2>
        <p className="text-grey-900 lg:text-xl leading-[1.7] mb-6 lg:w-4/6">
          Empower your teams with the skills they need to master Power BI.
          <br />
          Our tailored training programs are designed to meet the unique needs
          of your organization.
          <br />
          Here's what participants have to say about our training:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-lg shadow-md border border-grey-50"
            >
              <div className="text-gray-700 mb-4 min-h-[180px]">
                "{testimonial.quote}"
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-12 h-12 relative">
                    {testimonial.company === "Nilomu" && (
                      <div className="w-12 h-12 bg-gray-900 flex items-center justify-center rounded">
                        <span className="text-white text-xl font-bold">N</span>
                      </div>
                    )}
                    {testimonial.company === "Duplon" && (
                      <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded">
                        <span className="text-orange-500 text-2xl">*</span>
                      </div>
                    )}
                    {testimonial.company === "Cremiolop" && (
                      <div className="w-12 h-12 bg-teal-100 flex items-center justify-center rounded">
                        <span className="text-teal-500 text-xl">#</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.company}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateTrainingSection;
