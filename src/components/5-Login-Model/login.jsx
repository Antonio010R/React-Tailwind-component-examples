import React from "react";
import facebook from "../../assets/5-Login-Model/facebook.png";
import google from "../../assets/5-Login-Model/google.png"

const Login = () => {
  return (
    <div className="mt-12  border-t border-gray-300 ">
      <div className="py-6 flex flex-col items-center justify-center space-y-4">
        <p className="text-sm text-gray-400">or log in with</p>
        <div className="w-full flex flex-col space-y-5  md:flex-row md:space-y-0 md:space-x-4">
          <button className="px-2 flex items-center justify-center p-3 space-x-4 border w-full border-gray-300 rounded-lg shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <img className="w-9" src={facebook} alt="facebook" />
            <span>Facebook</span>
          </button>
          <button className="px-2 flex items-center justify-center p-3 space-x-4 border w-full border-gray-300 rounded-lg shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <img className="w-9" src={google} alt="google" />
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
