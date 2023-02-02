import React from "react";
import image from "../../assets/1-Email-Subscription-Card/image.jpg";

const Email = () => {
  return (
    <div className="flex items-center justify-center bg-zinc-700 h-screen">
      <div className=" flex flex-col bg-zinc-800 p-2 rounded-2xl text-center justify-center md:flex-row md:space-x-4 ">
        <img
          className="rounded-2xl h-80 transform hover:scale-105 duration-200 md:h-64 md:rounded-r-none md:hover:scale-110 md:hover:rounded-r-none"
          src={image}
          alt="email"
        />
        <div className="md:flex md:items-center ">
          <div className="p-6 flex flex-col items-center tracking-wide md:text-left md:items-start">
            <h1 className="font-serif  text-white text-xl mb-4 ">
              Get diet and fitness tips in your inbox
            </h1>
            <p className="text-white text-xs w-72 mb-4 leading-relaxed">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>
            <div className="space-y-4 w-full md:flex md:space-x-2 md:space-y-0 md:pr-6 ">
              <input
                className="w-full p-2 text-center text-white placeholder:text-xs bg-zinc-800 rounded-none placeholder:text-zinc-400 border border-1 border-zinc-600 focus:outline-none placeholder:md:text-left placeholder:md:px-2 "
                placeholder="Enter your email address"
              />
              <button className="w-full md:w-fit p-4 rounded-lg  bg-lime-500 text-xs py-3 hover:bg-lime-700 hover:text-white duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
