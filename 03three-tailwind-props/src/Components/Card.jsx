import React from "react";

function Card() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        {/* Image Section */}
        <div className="relative h-56 bg-gradient-to-r from-purple-600 to-pink-500 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-purple-600 shadow-lg">
                AK
              </div>
              <h3 className="text-2xl font-bold">Ahmed Khan</h3>
              <p className="text-sm opacity-90 mt-1">Full Stack Developer</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg">
            <span className="text-xs font-bold text-purple-600">PRO</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Professional Portfolio
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Building modern web applications with cutting-edge technologies.
            Specialized in React, Node.js, and cloud solutions. Let's create
            something amazing together!
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-5 pb-5 border-b border-gray-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">150+</p>
              <p className="text-xs text-gray-500 mt-1">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-600">50K+</p>
              <p className="text-xs text-gray-500 mt-1">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600">4.9★</p>
              <p className="text-xs text-gray-500 mt-1">Rating</p>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
              React
            </span>
            <span className="px-3 py-1.5 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">
              Node.js
            </span>
            <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
              TypeScript
            </span>
            <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              AWS
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Hire Me
            </button>
            <button className="px-6 bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors duration-200">
              Message
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
            <span>📍 Lahore, Pakistan</span>
            <span>💼 Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
