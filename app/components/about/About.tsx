import React from "react";

const About = () => {
  const subsidiaries = [
    {
      title: "Freelancing Projects",
      description:
        "Providing top-notch freelance services tailored to meet client needs across various industries.",
      image: "/home/aboutFreelancer.png", // Transparent PNG
    },
    {
      title: "Event Planning",
      description:
        "From corporate events to weddings and tours, we specialize in planning unforgettable events with precision and creativity.",
      image: "/home/aboutEvent.png", // Transparent PNG
    },
    {
      title: "Stock Advisory",
      description:
        "Expert advisory services that guide you through the complexities of stock investments, offering strategies for growth.",
      image: "/home/abotStock.png", // Transparent PNG
    },
    {
      title: "Consultancy Services",
      description:
        "Connect with leading experts for personalized consultancy services that drive business and individual success.",
      image: "/home/aboutConsultant.png", // Transparent PNG
    },
  ];

  return (
    <section className="about-us pt-6 px-6 md:px-12 lg:px-20 pb-16">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2B2B2B] mb-4 md:text-4xl lg:text-5xl">
          About Us
        </h2>
        <p className="text-lg text-[#2B2B2B] md:text-xl">
          We are a team of dedicated professionals committed to providing the
          best services and solutions for our customers. Our mission is to
          innovate and create value in every project we undertake.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {subsidiaries.map((subsidiary, index) => (
          <div
            key={index}
            className="relative card bg-base-100 rounded-lg shadow-lg shadow-green-800 transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url(${subsidiary.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            {/* Content */}
            <div className="relative z-10 p-6 text-center text-white">
              <h2 className="card-title text-xl font-semibold mb-2">
                {subsidiary.title}
              </h2>
              <p className="text-sm">{subsidiary.description}</p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-outline btn-primary text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
