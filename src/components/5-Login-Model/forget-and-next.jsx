import React from "react";

const ForgetAndNext = () => {
  return (
    <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 ">
      <p className="w-full text-center font-thin text-cyan-700 cursor-pointer mx-10 md:text-left md:mx-0">
        Forget password
      </p>
      <button className="flex items-center justify-center w-full bg-cyan-700 py-6 text-white font-medium  rounded-lg transition shadow-sm shadow-cyan-700 hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-90 md:px-10 md:w-auto">
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 ml-4"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="13" y1="18" x2="19" y2="12"></line>
          <line x1="13" y1="6" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

export default ForgetAndNext;
