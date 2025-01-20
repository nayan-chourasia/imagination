'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Blog } from '../../data/data';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const router = useRouter();

  const navigateToBlog = () => {
    router.push(`/blog/${blog.id}`);
  };

  return (
    <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg bg-transparent hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="relative w-full h-60">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <h2 className="text-white text-2xl font-bold drop-shadow-md">
            {blog.title}
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-4">
        {/* Subtitle */}
        <p className="text-[#2B2B2B] text-base line-clamp-3">{blog.subtitle}</p>

        {/* Author and Date */}
        <p className="text-gray-500 text-sm">
          {`By ${blog.author} · ${blog.date}`}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700"></div>

        {/* Action Button */}
        <button
          onClick={navigateToBlog}
          className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
