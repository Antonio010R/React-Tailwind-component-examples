import React from "react";

const Navigation = () => {
  return (
    <div className="flex flex-col space-y-3 items-center justify-center md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
      <div className="group cursor-pointer">
        <div>Vector</div>
        <div className="mx-2 mt-2 border-b-2 opacity-0 group-hover:opacity-100 border-black " />
      </div>
      <div className="group cursor-pointer">
        <div>Illustrations</div>
        <div className="mx-2 mt-2 border-b-2 opacity-0 group-hover:opacity-100 border-black " />
      </div>
      <div className="group cursor-pointer">
        <div>Images</div>
        <div className="mx-2 mt-2 border-b-2 opacity-0 group-hover:opacity-100 border-black " />
      </div>
      <div className="group cursor-pointer">
        <div>Icons</div>
        <div className="mx-2 mt-2 border-b-2 opacity-0 group-hover:opacity-100 border-black " />
      </div>
    </div>
  );
};

export default Navigation;
