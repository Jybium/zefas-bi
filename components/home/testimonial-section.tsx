"use client";

import { ProfileCircle } from "iconsax-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Oluwafemi Omole",
    role: "Student",
    text: "The Build with Zefas BI - Portfolio Builder helped me develop a unique portfolio with a variety of projects showcasing my analytical skills. I saw analysis in a different light—not just crunching numbers, but enabling decision-making. I received exceptional value for what I paid and would gladly recommend the training to anyone looking to upskill their Power BI knowledge in analysis, UI, and critical thinking.",
    image: "/avatar1.png",
    link: "https://mavenanalytics.io/profile/28b12370-0061-7071-7f9e-45bfcae23a1a",
  },
  {
    name: "Waleed Salah",
    role: "Student",
    text: "The Build with Zefas BI - Portfolio Builder was a game-changer for me. It not only enhanced my *UI design, analytical skills, and DAX proficiency* but also helped me build a standout portfolio that truly sets me apart. The hands-on projects and expert guidance transformed how I approach data storytelling and report design. I highly recommend this training to anyone serious about mastering Power BI and making an impact in the analytics space.",
    image: "/avatar2.png",
    link: "https://mavenanalytics.io/profile/e8b17370-40c1-7054-7c29-4333c06369ef",
  },
  {
    name: "Edith Obidi",
    role: "Student",
    text: "The Build with Zefas BI - Portfolio Builder has been a transformative experience. My skills in analysis, DAX, and UI design have improved significantly, and I now feel confident enough to teach even the most complex Power BI concepts. The program helped me create a wide range of projects, each showcasing my ability to solve real-world problems with data. It's a perfect fit for anyone looking to elevate their Power BI expertise and stand out in the field.",
    image: "/avatar3.png",
    link: "https://edithobidi.github.io/",
  },
];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Testimonials() {
  return (
    <section className="py-16 px-4 lg:px-20 text-center bg-white">
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
              {/* <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              /> */}
              <ProfileCircle
                size="40"
                color={getRandomColor()}
                variant="Bulk"
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
              className="text-brand-600 font-semibold mt-4 inline-block"
            >
              See Portfolio ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
