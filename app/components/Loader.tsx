import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fcf5eb] z-50">
      {/* Welcome Message */}
      <h1 className="font-extrabold text-3xl md:text-4xl text-black mb-6 animate-pulse">
        Welcome to <span className="text-blue-500">Imagination</span>
      </h1>

      {/* Spinner */}
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

        {/* Inner Glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-30 animate-pulse"></div>
      </div>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 text-sm md:text-base animate-fade-in">
        Loading... please wait
      </p>
    </div>
  );
};

export default Loader;
