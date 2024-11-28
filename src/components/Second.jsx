import React from "react";
import dataS from "../assets/main/dataS.png";
import tick from "../assets/main/tick.png";
const Second = () => {
  return (
    <div className="px-[20px] lg:px-[100px] sm:px-[50px] py-[50px] grid grid-cols-1 md:grid-cols-2  justify-between items-center  gap-5 bg-[#1F3343]">
      <div className="flex  flex-col gap-8">
        <p className="text-[48px] font-bold text-white">
          <span className="text-[#FF8800]">Practice </span> your skills
        </p>
        <p className="font-[18px] text-[#C7C9D9]">
          Diverse practice problems of varying difficulty levels, as <br></br>
          encountered in real job interviews.
        </p>
        <div className="flex gap-2 items-center justify-center">
          <img className="w-[32px] h-[32px]" src={tick}></img>
          <p className="text-[16px] text-[#C7C9D9]">
            Solve a{" "}
            <span className="text-[#FF8800]">
              {" "}
              diverse range of practice questions{" "}
            </span>{" "}
            to enhance your coding and problem-solving abilities.
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <img className="w-[32px] h-[32px]" src={tick}></img>
          <p className="text-[16px] text-[#C7C9D9]">
            Familiarize yourself with common interview topics and algorithms
            through <span className="text-[#FF8800]"> hands-on practice</span>.
          </p>
        </div>
      </div>
      <div >
        <img src={dataS}></img>
      </div>
    </div>
  );
};

export default Second;
