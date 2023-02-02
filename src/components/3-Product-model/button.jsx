import React from "react";

const Button = () => {
  return (
    <div className="group w-full transform ">
      <button className="bg-blue-700 text-white w-full border-b-8 border-b-blue-700 rounded-lg group-hover:bg-blue-700 group-hover:border-b-0 group-hover:border-t-8 group-hover:border-blue-700 duration-300">
        <div className="px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700 duration-300">
          Add to cart
        </div>
      </button>
    </div>
  );
};

export default Button;
