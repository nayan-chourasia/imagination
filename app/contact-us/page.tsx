'use client';

import React, { useState, useEffect } from 'react';
import Footer from '../components/hero/Footer';
import Navbar from '../components/Navbar';

const ContactUsPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#fcf5eb] text-gray-900">
      <Navbar />

      {/* Section 1: Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#2B2B2B]">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-[#2B2B2B] max-w-4xl mx-auto">
            Have a question, need assistance, or want to collaborate on a new project? Contact us today, and let’s start the conversation.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="py-16 bg-[#fcf5eb] shadow-md rounded-lg">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
              Contact Form
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below, and we’ll get back to you as soon as possible.
            </p>
          </div>

          <form className="max-w-3xl mx-auto p-8 bg-[#fcf5eb] rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[#2B2B2B] font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-4 bg-[#fcf5eb] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[#2B2B2B] font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-4 bg-[#fcf5eb] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label className="text-[#2B2B2B] font-semibold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4 bg-[#fcf5eb] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Message"
                rows={6}
              ></textarea>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 3: Our Location */}
      <section className="py-16 bg-[#fcf5eb]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6">
            Our Location
          </h3>
          <p className="text-lg text-[#2B2B2B] mb-8">
            Visit us at our headquarters or reach out for more details. Here’s where you can find us:
          </p>

          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.006352745429!2d-122.0857434!3d37.4220656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb17ac38ec07%3A0xb1ffb57d50896c5e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630352456827!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section 4: Footer */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
