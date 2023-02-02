import React from "react";
import product from "../../assets/3-Product-Model/headphone.png";

const ImageContainer = () => {
  return (
    <div className="flex justify-center">
      <img
        className="h-56 transform hover:scale-110 duration-500 "
        src={product}
        alt="headphone"
      />
    </div>
  );
};

export default ImageContainer;
