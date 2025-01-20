'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { blogData } from '../../data/data';
import Image from 'next/image';

const SingleBlogPage: React.FC = () => {
  const { id } = useParams(); 
  console.log(id, "from blog page")

  // Ensure `id` is a string and is valid
  if (!id || Array.isArray(id)) {
    return <div>Invalid blog ID</div>;
  }

  // Find the blog by ID (converted to integer)
  const blog = blogData.find((blog) => blog.id === parseInt(id, 10));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600">{blog.title}</h1>
        <p className="text-gray-500 mt-2">{`By ${blog.author} on ${blog.date}`}</p>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={500}
          className="mt-6 rounded-lg"
        />
        <div className="mt-8">
          {blog.paragraphs.map((para, index) => (
            <p key={index} className="text-lg text-gray-700 mb-6">{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
