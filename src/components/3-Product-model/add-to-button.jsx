import React from "react";

const AddToButton = ({ text, image }) => {
  return (
    <button className="flex items-center justify-center py-3 border-2  border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 md:w-48">
      <img className=" w-8 mr-3" src={image} alt={text} />
      <span>{text}</span>
    </button>
  );
};

export default AddToButton;
