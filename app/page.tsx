'use client'
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/About";
import WhyChooseUs from "./components/hero/WhyChooseUs";
import TestimonialSection from "./components/hero/Testimonial";
import GetReady from "./components/hero/GetReady";
import Footer from "./components/hero/Footer";
import Loader from "./components/Loader";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#fcf5eb]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <HeroSection />
      <About />
      <WhyChooseUs />
      <TestimonialSection />
      <GetReady />
      <Footer />
    </div>
  );
};

export default Page;
