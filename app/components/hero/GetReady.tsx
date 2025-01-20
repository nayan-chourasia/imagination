import React from "react";

const GetReady = () => {
  return (
    <section className="bg-[#ECEBDE] py-16">
      <div className="container mx-auto text-center px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6">
          Ready to Get Started?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#2B2B2B] mb-8">
          No matter your needs, ImaginationPenguin is here to help. From
          freelancing projects to full-scale consultancy, we offer solutions
          that work for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="btn btn-primary bg-[#2B2B2B] border-none text-[#fcf5eb] btn-md rounded-3xl ">
              Get Started
            </button>
        </div>
      </div>
    </section>
  );
};

export default GetReady;
