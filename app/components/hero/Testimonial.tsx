import React from "react";
import Image from "next/image";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      thoughts:
        "Imagination Penguin transformed our vision into reality with exceptional precision!",
      image: "/hero1.png",
    },
    {
      name: "Jane Smith",
      thoughts:
        "I loved their innovative approach and attention to detail. Highly recommended!",
      image: "/hero1.png",
    },
    {
      name: "Michael Brown",
      thoughts: "Their team was highly professional and results-driven.",
      image: "/hero1.png",
    },
    {
      name: "Emily Johnson",
      thoughts:
        "Amazing experience! The support and quality of work were outstanding.",
      image: "/hero1.png",
    },
    {
      name: "Chris Wilson",
      thoughts: "They truly go above and beyond to meet client expectations.",
      image: "/hero1.png",
    },
    {
      name: "Olivia Martinez",
      thoughts:
        "Their creativity and execution left me amazed. Fantastic team!",
      image: "/hero1.png",
    },
  ];

  return (
    <section
      className="py-12 bg-body bg-cover"
      style={{ backgroundImage: "url('/home/testimonial.png')" }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
            What People Say
          </h2>
          <p className="mt-4 text-lg text-[#2B2B2B]">
            Hear from our happy clients!
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card relative p-4 rounded-lg shadow-md transition-transform transform hover:scale-105`}
              style={{
                marginTop: `${(index % 2) * 30}px`, // Uneven position
                marginBottom: `${(index % 3) * 20}px`, // Uneven spacing
              }}
            >
              {/* Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-sm">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64} // Adjust dimensions as needed
                  height={64}
                  className="rounded-full"
                />
              </div>

              {/* Name */}
              <h3 className="text-md font-semibold text-[#2B2B2B] text-center mb-2">
                {testimonial.name}
              </h3>

              {/* Thoughts */}
              <p className="text-sm text-[#2B2B2B] text-center">
                {testimonial.thoughts}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
