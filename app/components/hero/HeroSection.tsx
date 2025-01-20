import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="mx-auto w-full lg:min-h-[20vh] pt-20 px-6 md:px-12 lg:px-16 max-w-screen-xl ">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          <h1 className="font-extrabold text-[#2B2B2B] text-3xl md:text-5xl lg:text-6xl leading-tight">
            Imagination Penguin
          </h1>
          <p className="font-medium text-[#2B2B2B] text-lg md:text-xl mt-6">
            Unleashing creativity and innovation to transform your ideas into
            reality.
          </p>
          <p className="text-[#2B2B2B] text-md md:text-lg mt-4 lg:leading-8">
          "ImaginationPenguin is a dynamic and innovative parent company, leading multiple successful ventures across various industries. We specialize in delivering premium services through our diverse subsidiaries, which cater to freelancing projects, event planning, stock advisory, and expert consultancy."
          </p>
          <div className="flex gap-4 py-6">
            <button className="btn btn-primary bg-[#2B2B2B] border-none text-[#fcf5eb] btn-md rounded-3xl ">
              Get Started
            </button>
            <button className="btn btn-secondary bg-transparent border-[#2B2B2B] btn-md rounded-3xl text-[#2B2B2B]">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end w-full max-w-xl">
          <Image
            src="/heroImg.png"
            alt="Hero"
            height={800}
            width={800}
            className="rounded-lg shadow-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
