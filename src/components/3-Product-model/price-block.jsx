import React from "react";

const PriceBlock = () => {
  return (
    <div className="flex flex-col text-center space-y-3 md:text-left">
      <div className="line-through">$799</div>
      <h2 className="text-5xl font-bold">$599</h2>
      <p className="text-slate-500 text-sm font-light">
        This offer is valid until April 3rd or as long as stock lasts!
      </p>
    </div>
  );
};

export default PriceBlock;
