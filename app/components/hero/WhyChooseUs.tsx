import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Advisors",
      description: "Our team consists of seasoned professionals.",
      bgImage: "/whyus/expetAdvice.png",
    },
    {
      title: "Customized Solutions",
      description: "Tailored services to meet your unique needs.",
      bgImage: "/whyus/customSol.png",
    },
    {
      title: "Proven Track Record",
      description: "Years of experience with successful outcomes.",
      bgImage: "/whyus/provenTrack.png",
    },
    {
      title: "24/7 Support",
      description: "We are always available for you.",
      bgImage: "/whyus/customerSupport.png",
    },
    // Additional reasons
    {
      title: "Expertise",
      description: "We employ top-tier professionals who bring deep industry knowledge to every project.",
      bgImage: "/whyus/expertise.png",
    },
    {
      title: "Quality",
      description: "Our commitment to excellence ensures that every client receives outstanding results.",
      bgImage: "/whyus/quality.png",
    },
    {
      title: "Tailored Solutions",
      description: "We understand that each client is unique, which is why our services are always customized to meet your specific needs.",
      bgImage: "/whyus/tailoredSol.png",
    },
    {
      title: "Reliability",
      description: "From start to finish, we are committed to delivering on time, on budget, and with great results.",
      bgImage: "/whyus/reliability.png",
    },
    {
      title: "Global Reach",
      description: "Serving clients around the world, we understand the diverse needs of businesses and individuals from different cultures.",
      bgImage: "/whyus/reach.png",
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
            Why ImaginationPenguin?
          </h2>
          <p className="mt-4 text-lg text-[#2B2B2B]">
            With a diverse range of services, a team of seasoned professionals, and a client-first approach, we stand out in every industry we serve. Here's why you should choose us:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "lg:col-span-2 h-64" : "h-48"
              }`}
              style={{
                backgroundImage: `url(${reason.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
              <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {reason.title}
                </h3>
                {/* Description */}
                <p className="text-sm md:text-base">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
