'use client';
import React from 'react';
import { blogData } from '../data/data'; // Import the blog data
import BlogCard from '../components/blog/BlogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/hero/Footer';

const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow py-16 bg-[#fcf5eb]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <header className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-[#2B2B2B] mt-4">
              Stay updated with our latest insights, articles, and stories.
            </p>
          </header>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
