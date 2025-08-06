import React from "react";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "framer-motion";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  const handleScrollToJobs = () => {
    document.getElementById("HotJobs").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero my-8">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="flex-1 mx-6 md:mx-0">
          <h1 className="text-6xl font-bold font-rancho">
            Latest Job For You!
          </h1>
          <p className="py-6 text-xl">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button
            onClick={handleScrollToJobs}
            className="btn bg-[#599bff] border-4 rounded-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
          >
            Get Started
          </button>
        </div>
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: easeInOut }}
            src={team1}
            className="w-60 md:w-80 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-[#3386ff] shadow-xl"
          />
          <motion.img
            animate={{ x: [90, 50, 90] }}
            transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
            src={team2}
            className="w-60 md:w-80 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-[#3386ff] shadow-xl mr-20 md:mr-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
