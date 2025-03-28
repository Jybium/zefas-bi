"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Waleed Salah",
    role: "Student",
    text: "Zefas training really really helped me to understand some concepts better and also successfully build my portfolio. I intend to recommend to my friends who are interested in picking up more skills too.",
    image: "/avatar1.png",
    link: "#",
  },
  {
    name: "Edith Obidi",
    role: "Student",
    text: "Zefas training really really helped me to understand some concepts better and also successfully build my portfolio. I intend to recommend to my friends who are interested in picking up more skills too.",
    image: "/avatar2.png",
    link: "#",
  },
  {
    name: "Oluwafemi Omole",
    role: "Student",
    text: "Zefas training really really helped me to understand some concepts better and also successfully build my portfolio. I intend to recommend to my friends who are interested in picking up more skills too.",
    image: "/avatar3.png",
    link: "#",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-900">
        What do Our Students Say?
      </h2>
      <p className="text-gray-600 mt-4">
        Here are testimonials from some students who took our training and built
        amazing portfolios with Power BI.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-sm text-left"
          >
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">{testimonial.text}</p>
            <a
              href={testimonial.link}
              className="text-green-600 font-semibold mt-4 inline-block"
            >
              See Portfolio ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
