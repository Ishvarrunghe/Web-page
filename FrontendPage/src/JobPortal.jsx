import React from "react";
import { FiSearch } from "react-icons/fi";

const items = [
  "Delivery Driver",
  "Warehouse",
  "Packer",
  "Work From Home",
  "Student",
  "Part-Time",
  "Cleaner",
  "Receptionist",
  "Customer Service",
];

const JobPortal = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="w-full bg-indigo-200 flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <div className="text-3xl font-bold text-indigo-700">
          Talent.com
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 cursor-pointer font-medium">
          <li className="hover:text-indigo-600">Search Jobs</li>
          <li className="hover:text-indigo-600">Search Salary</li>
          <li className="hover:text-indigo-600">Tax Calculator</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block cursor-pointer hover:text-indigo-600">
            For Employers
          </div>

          <button className="hover:bg-red-50 px-4 py-2 rounded-lg font-bold border-2 border-red-500 text-red-500">
            Sign In / Log In
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden block rotate-90 font-bold cursor-pointer">
            |||
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-white rounded-lg p-6 mx-auto flex flex-col gap-6 mb-6 mt-6 max-w-md w-full shadow">
        
        <h1 className="text-xl font-bold text-center">
          Urgent Hiring 🚀
        </h1>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Job title"
          className="w-full text-base outline-none border focus:border-indigo-500 rounded-3xl p-3"
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full text-base outline-none border focus:border-indigo-500 rounded-3xl p-3"
        />

        <button className="w-full rounded-3xl p-3 bg-orange-500 hover:bg-orange-400 text-xl font-bold text-white transition">
          Find Jobs
        </button>

        {/* Popular Searches */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-3">
            Popular searches
          </h2>

          <ul className="divide-y">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-50 px-2 rounded"
              >
                <FiSearch className="text-gray-400" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default JobPortal;
