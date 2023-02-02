import React from "react";
import heroImage from "../../assets/5-Login-Model/image.jpg";
import ForgetAndNext from "./forget-and-next";
import Login from "./login";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-50">
      <div className="flex flex-col m-6 bg-white shadow-2xl rounded-2xl space-y-6 md:space-y-0 md:flex-row md:space-x-3">
        <div className="p-6 md:p-20">
          <h1 className="text-4xl font-bold font-serif mb-5">Log In</h1>
          <p className="text-gray-500 max-w-sm mb-10">
            Log in to your account to upload or download pictures, videos or
            music.
          </p>
          <input
            className="px-6 py-6 mb-7 w-full border border-gray-300 rounded-lg focus:outline-black"
            placeholder="Enter your email address"
          />
          <ForgetAndNext />
          <Login />
        </div>
        <img
            className="hidden w-[430px] bg-center objectfit rounded-r-lg md:block"
          src={heroImage}
          alt="heroimage"
        />
      </div>
    </div>
  );
};

export default LoginPage;
