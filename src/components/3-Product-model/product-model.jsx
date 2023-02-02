import React from "react";
import ImageContainer from "./image-container";
import weight from "../../assets/3-Product-Model/weight.png";
import heart from "../../assets/3-Product-Model/heart.png";

import PriceBlock from "./price-block";
import Button from "./button";
import AddToButton from "./add-to-button";
const ProductModel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="flex flex-col p-6 pb-10 m-3 bg-white rounded-2xl shadow-2xl space-y-10 md:flex-row md:px-16 md:space-y-0 md:space-x-8 md:py-16">
        <ImageContainer />
        <div className="flex flex-col text-center items-center space-y-3 md:items-start">
          <p className="inline-block bg-black text-white text-sm py-1 px-4 rounded-2xl w-max ">
            Free Shipping
          </p>
          <h1 className="text-2xl font-medium max-w-sm md:text-left">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </h1>
          <PriceBlock />
          <Button />
          <div className="flex items-center space-x-3 group w-full">
            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
            <div className="text-sm">50+ pcs. in stock</div>
          </div>
          <div className="flex flex-col space-y-3  w-full md:flex-row md:space-y-0 md:space-x-3 md:justify-between ">
            <AddToButton text="Add to cart" image={weight} />
            <AddToButton text="Add to wishlist" image={heart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModel;
