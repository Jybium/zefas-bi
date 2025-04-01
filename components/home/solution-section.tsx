import Image from "next/image";
import Link from "next/link";

const Solutions = () => {
  const solutions = [
    {
      title: "Power BI Business Reports",
      description:
        "We design and develop intuitive, interactive, and data-driven reports that enable you to visualize your business performance and uncover growth opportunities.",
      image:
        "https://res.cloudinary.com/ddynvenje/image/upload/v1742835792/zefasbi/power-bi-report-solution_lfv0xu.svg",
      link: "/solutions/power-bi",
      buttonText: "Explore Projects",
    },
    {
      title: "Microsoft Fabric Integration",
      description:
        "Seamlessly integrate Microsoft Fabric into your analytics ecosystem to unlock advanced data processing, storage, and management capabilities.",
      image:
        "https://res.cloudinary.com/ddynvenje/image/upload/v1742835783/zefasbi/microsoft-fabric-report-solution_qdwv67.svg",
      link: "/solutions/microsoft-integration",
      buttonText: "Explore Projects",
    },
    {
      title: "Corporate Power BI Training",
      description:
        "Empower your teams with the skills they need to master Power BI. Our tailored training programs are designed to meet the unique needs of your organization.",
      image:
        "https://res.cloudinary.com/ddynvenje/image/upload/v1742835795/zefasbi/corporate-training-solution_deadoq.svg",
      link: "/solutions/enterprise-planning",
      buttonText: "See Reviews from Clients",
    },
  ];

  return (
    <section className="py-16 bg-[#FCFFF5]">
      <div className="px-4 sm:px-6 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our Solutions
          </h2>
          <p className="text-gray-600 mt-2">
            We help you make sense of your data in the following ways;
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              {/* Image */}
              <div className="mb-4">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={500}
                  height={300}
                  className="rounded-md"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-gray-900">
                {solution.title}
              </h3>
              <p className="text-gray-600 mt-2">{solution.description}</p>

              {/* CTA Button */}
              <div className="mt-4">
                <Link
                  href={solution.link}
                  legacyBehavior
                  passHref
                  className="text-center text-brand-600"
                >
                  <a className="flex items-center justify-center text-brand-600 bg-brand-50 h-[60px] text-center border border-brand-600 hover:text-white font-medium rounded-md hover:bg-brand-700 transition w-full">
                    {solution.buttonText}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
