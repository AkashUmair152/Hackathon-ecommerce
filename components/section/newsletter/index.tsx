import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className=" py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Subscribe Our Newsletter
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get the latest information and promo offers directly
          </p>
          <form className="flex flex-col sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:w-64"
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold rounded-r px-4 py-2 mt-2 sm:mt-0 sm:ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
