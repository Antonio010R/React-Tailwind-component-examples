import React from "react";

const FeaturesList = ({ text }) => {
  return (
    <div>
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 inline-block mr-2"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      }
      <span>{text}</span>
    </div>
  );
};

export default FeaturesList;
