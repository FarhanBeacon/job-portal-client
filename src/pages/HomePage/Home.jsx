import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* Browse by category Section */}
      <div className="w-[95%] mx-auto mt-24 space-y-2">
        <h1 className="text-5xl text-center font-semibold font-rancho">
          Browse by category
        </h1>
        <p className="text-lg text-center text-gray-600">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </p>
        {/* Cards transform transition hover:-translate-y-1 */}
        <div className="flex justify-between my-8">
          {/* Card 01 */}
          <div className="bg-base-100 w-[220px] px-4 py-12 cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1 rounded-xl drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
            <h4 className="text-lg text-[#599bff] font-semibold">Marketing & Sale</h4>
            <p className="text-gray-600">1256 Job Available</p>
          </div>
          {/* Card 02 */}
          <div className="bg-base-100 w-[220px] px-4 py-12 cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1 rounded-xl drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
            <h4 className="text-lg text-[#599bff] font-semibold">Marketing And Sell</h4>
            <p className="text-gray-600">1256 Job Available</p>
          </div>
          {/* Card 03 */}
          <div className="bg-base-100 w-[220px] px-4 py-12 cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1 rounded-xl drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
            <h4 className="text-lg text-[#599bff] font-semibold">Marketing And Sell</h4>
            <p className="text-gray-600">1256 Job Available</p>
          </div>
          {/* Card 04 */}
          <div className="bg-base-100 w-[220px] px-4 py-12 cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1 rounded-xl drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
            <h4 className="text-lg text-[#599bff] font-semibold">Marketing And Sell</h4>
            <p className="text-gray-600">1256 Job Available</p>
          </div>
        </div>
      </div>
      {/* Jobs of the day */}
      <HotJobs />
    </div>
  );
};

export default HomePage;
