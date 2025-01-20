import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/hero/Footer";
import TeamSection from "../components/about/TeamSection";
import GetReady from "../components/hero/GetReady";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-[#2B2B2B]">
      <Navbar/>
      {/* Section 1: Company Overview */}
      <section
        className="py-4 bg-[#fcf5eb] lg:flex lg:justify-between"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 lg:text-start py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2B2B2B]">
            Want to Know About Us?
          </h2>
          <h3 className="text-2xl md:text-4xl font-medium mb-4 text-[#2B2B2B]">So why not Explore with us ?</h3>
          <p className="text-lg md:text-xl text-[#2B2B2B] max-w-3xl text-left lg:leading-10">
            ImaginationPenguin is a parent company with diverse ventures across
            multiple industries. With expertise in freelancing, event planning,
            stock advisory, and business consultancy, we cater to a wide range of
            client needs, ensuring high-quality solutions, customized strategies,
            and unparalleled service.
          </p>
          
        </div>
        <div className="w-full justify-center hidden lg:block mt-10">
            <Image
            src='/whyus/about.png'
            alt="about"
            height={600}
            width={600}/>
          </div>
      </section>

      {/* Section 2: Our Mission and Values */}
      <section
        className=""
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 bg-[#fcf5eb] py-16">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-[#2B2B2B]">
            Our Mission & Values
          </h3>
          <p className="text-lg md:text-xl text-[#2B2B2B] text-center mb-8">
            At ImaginationPenguin, we believe in delivering exceptional results by fostering innovation, collaboration, and client satisfaction. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-yellow-200 bg-opacity-60 rounded-full shadow-xl shadow-yellow-800">
              <h4 className="text-2xl text-yellow-500 font-semibold mb-4">Innovation</h4>
              <p className="text-center text-yellow-500">
                We prioritize creative solutions that push the boundaries of what&apos;s possible, enabling us to meet the evolving needs of our clients.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#C4DFE6] bg-opacity-60 rounded-full shadow-xl shadow-green-800">
              <h4 className="text-2xl text-[#2B2B2B] font-semibold mb-4">Integrity</h4>
              <p className="text-center text-[#2B2B2B]">
                We value transparency and honesty in all our interactions, ensuring that we build long-lasting relationships based on trust and mutual respect.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-pink-200 bg-opacity-60 rounded-full shadow-xl shadow-pink-800">
              <h4 className="text-2xl text-pink-500 font-semibold mb-4">Excellence</h4>
              <p className="text-center text-pink-500">
                We strive for excellence in everything we do, ensuring that every project, no matter the size, meets our high standards and exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Team */}
      <TeamSection/>

      {/* Section 4: Call to Action */}
      <GetReady/>
      <Footer/>
    </div>
  );
};

export default AboutPage;
