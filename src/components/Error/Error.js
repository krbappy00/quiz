import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" w-full">
      <div className="h-[100vh]">
        <div className="max-w-[660px] pt-[300px] pb-[200px] mx-auto text-center bg-black/30 text-gray-200">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-300">
            Oops!
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
            404 PAGE NOT FOUND
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2">
            The page you are looking for might be removed or temporary
            unavailable
          </p>
          <Link to={"/"}>
            <button className="bg-orange-300 text-gray-600 px-4 py-1 rounded-lg mt-4">
              GO TO HOME PAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
