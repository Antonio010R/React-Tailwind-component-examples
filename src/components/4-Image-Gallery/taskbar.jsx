import React from "react";

const Taskbar = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row space-y-5 md:space-y-0 items-center ">
      <div className="flex justify-between border-b">
        <input
          placeholder="Search"
          className="py-4 ml-6 focus:outline-none md:w-80 placeholder:font-thin"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 text-gray-300 duration-200 hover:scale-110"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>
      <div className="bg-black text-white text-lg px-14 py-3 rounded-md  shadow-lg  border  border-black hover:bg-white hover:text-black duration-200">
        Upload
      </div>
    </div>
  );
};

export default Taskbar;
