import React from "react";
import Gallery from "./gallery";
import Navigation from "./navigation";
import Taskbar from "./taskbar";

const ImageGallery = () => {
  return (
    <div className="flex items-center justify-center bg-cyan-50 min-h-screen">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <Navigation />
        <Taskbar />
        <Gallery />
      </div>
    </div>
  );
};

export default ImageGallery;
