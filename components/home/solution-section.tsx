import React from "react";
import Card from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      title: "Power BI Custom Reports",
      description:
        "Create custom dashboards that visualize your business metrics in real-time.",
      image: "/api/placeholder/400/300",
      link: "/solutions/power-bi",
    },
    {
      title: "Microsoft Data Integration",
      description:
        "Seamless integration with your existing Microsoft ecosystem for comprehensive analytics.",
      image: "/api/placeholder/400/300",
      link: "/solutions/microsoft-integration",
    },
    {
      title: "Enterprise Planning & Training",
      description:
        "Strategic data planning and team training to maximize your data analytics capabilities.",
      image: "/api/placeholder/400/300",
      link: "/solutions/enterprise-planning",
    },
  ];

  return (
    <section className="py-16 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              title={solution.title}
              description={solution.description}
              image={solution.image}
              link={solution.link}
              raised
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
