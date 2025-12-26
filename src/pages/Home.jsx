import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-violet-200 to-blue-200 min-h-[87vh] flex items-center justify-center px-4">

      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 sm:p-12 max-w-2xl text-center transition-all duration-500 animate-fadeIn">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-800 mb-4">
          Welcome to <span className="text-blue-600">UrTODO</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-violet-900 mb-6">
          A simple, clean and powerful way to manage your daily tasks.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto mb-6 rounded-full"></div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base text-violet-900 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
            ✅ Add tasks easily
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
            ✏️ Edit & manage todos
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
            📦 Persistent storage
          </div>
        </div>

        {/* CTA */}
        <p className="text-violet-800 font-medium">
          Click on <span className="font-bold">To-Do's</span> in the navbar to get started 🚀
        </p>

      </div>
    </div>
  );
};

export default Home;
