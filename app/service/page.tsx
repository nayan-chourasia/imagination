'use client'
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/hero/Footer";
import GetReady from "../components/hero/GetReady";



const ServicePage = () => {
  const reasons = [
    {
      title: "Expert Advisors",
      content:
        "Our team of experts ensures the highest quality service with deep industry knowledge and vast experience in all sectors. We are committed to delivering exceptional results and providing innovative solutions tailored to your specific business needs.",
      icon: "💼",
    },
    {
      title: "Tailored Solutions",
      content:
        "Every service we provide is customized to fit the unique needs of our clients, ensuring the best results for every project. Whether you need web development, marketing strategies, or financial consulting, we offer scalable solutions designed for your growth.",
      icon: "⚙️",
    },
    {
      title: "Reliable Results",
      content:
        "We deliver reliable and measurable results, always ensuring that we meet deadlines and exceed client expectations. Our commitment to quality is backed by years of successful projects and long-term partnerships with satisfied clients.",
      icon: "📈",
    },
    {
      title: "Innovative Technology",
      content:
        "We stay ahead of the curve by integrating the latest technologies and trends into our services. From advanced data analytics to automation tools, we ensure your business is equipped with cutting-edge solutions for optimal efficiency.",
      icon: "🖥️",
    },
    {
      title: "Customer-Centric Approach",
      content:
        "At ImaginationPenguin, our clients come first. We prioritize clear communication, transparency, and collaboration to build strong, long-lasting relationships. Our customer-centric approach ensures we understand your goals and work diligently to achieve them.",
      icon: "❤️",
    },
    {
      title: "Global Reach",
      content:
        "With a diverse portfolio of clients from around the world, we bring a global perspective to every project. Our team understands the nuances of working across different cultures and industries, allowing us to deliver results that resonate on a global scale.",
      icon: "🌍",
    },
  ];
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div className="min-h-screen text-[#2B2B2B]">
        <Navbar/>

      {/* Section 1: Introduction */}
      <section
        className="lg:mt-4 lg:flex bg-[#fcf5eb] lg:gap-24"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-start bg-[#fcf5eb] py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2B2B2B]">
            What does we Provide ?
          </h2>
          <h3 className="text-2xl md:text-4xl font-medium mb-6 text-[#2B2B2B]">We provide services with Trust that you desire.</h3>
          <p className="text-lg md:text-xl text-[#2B2B2B] max-w-3xl mb-2 lg:leading-10">
            At ImaginationPenguin, we offer a wide range of services designed to help you achieve success across multiple industries. From freelancing projects to event planning, stock advisory, and business consultancy, we ensure that every solution is customized to your specific needs.
          </p>
        </div>
        <div className="w-full justify-center hidden lg:block mt-10">
            <Image
            src='/service/service2.png'
            alt="about"
            height={500}
            width={500}/>
          </div>
      </section>

      {/* Section 2: Service Details */}
      <section className="py-16 bg-[#fcf5eb]">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <div className="text-center mb-12">
      <h3 className="text-3xl md:text-4xl font-semibold text-[#2B2B2B]">
        What We Offer
      </h3>
      <p className="mt-4 text-lg text-[#2B2B2B]">
        Our diverse services are designed to meet your needs and provide the best possible outcomes.
      </p>
    </div>

    {/* Services List */}
    <div className="space-y-16">
      {/* Service 1: Freelancing Projects */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <Image
            src="/service/serviceFreelance.png" // Replace with actual image
            alt="Freelancing Projects"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <h4 className="text-2xl text-[#2B2B2B] font-semibold mb-4">Freelancing Projects</h4>
          <p className="text-[#2B2B2B] text-lg">
            Our team of talented professionals is here to help with your project needs, from web development to creative design and digital marketing.
          </p>
        </div>
      </div>

      {/* Service 2: Event Planning */}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:space-x-reverse lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <Image
            src="/service/serviceEvent.png" // Replace with actual image
            alt="Event Planning"
            width={400}
            height={300}
            className="rounded-lg "
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <h4 className="text-2xl text-[#2B2B2B] font-semibold mb-4">Event Planning</h4>
          <p className="text-[#2B2B2B] text-lg">
            From weddings to corporate events and trips, we handle all the details to ensure a seamless and unforgettable experience for you and your guests.
          </p>
        </div>
      </div>

      {/* Service 3: Stock Advisory */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <Image
            src="/service/serviceStock.png" // Replace with actual image
            alt="Stock Advisory"
            width={400}
            height={300}
            className="rounded-lg "
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <h4 className="text-2xl text-[#2B2B2B] font-semibold mb-4">Stock Advisory</h4>
          <p className="text-[#2B2B2B] text-lg">
            Get expert guidance on stock investments and trading. Our financial advisors provide strategies to help you make informed decisions and maximize returns.
          </p>
        </div>
      </div>

      {/* Service 4: Consultancy */}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:space-x-reverse lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <Image
            src="/service/serviceConsultant.png" // Replace with actual image
            alt="Consultancy"
            width={400}
            height={300}
            className="rounded-lg "
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <h4 className="text-2xl text-[#2B2B2B] font-semibold mb-4">Consultancy</h4>
          <p className="text-[#2B2B2B] text-lg">
            Our consultancy services provide expert advice in various fields, helping you optimize business processes and make the right strategic decisions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Section 3: Why Choose Us */}
      <section className="bg-[#fcf5eb] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2B2B2B]">
          Why Choose ImaginationPenguin?
        </h3>
        <p className="text-lg md:text-xl text-[#2B2B2B] mb-12 max-w-3xl mx-auto">
          Our commitment to excellence, customer satisfaction, and customized solutions sets us apart. Here&apos;s why businesses trust us:
        </p>
        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#fcf5eb] rounded-lg shadow-lg overflow-hidden group transition-all duration-300"
            >
              <div
                className="relative px-6 py-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{reason.icon}</span>
                  <h4 className="text-xl text-[#2B2B2B] font-semibold">{reason.title}</h4>
                </div>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M15 7l-5 5-5-5"
                    ></path>
                  </svg>
                </div>
              </div>

              <div
                className={`px-6 py-4 text-[#2B2B2B] transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                  overflow: 'hidden',
                }}
              >
                <p>{reason.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Section 4: Contact CTA */}
      <GetReady/>
      <Footer/>
    </div>
  );
};

export default ServicePage;
