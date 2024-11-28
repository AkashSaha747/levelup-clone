import React from "react";
import graph from "../assets/main/graph.png";
import tick from "../assets/main/tick.png";
const Third = () => {
  return (
    <div className="px-[20px] lg:px-[100px] sm:px-[50px] py-[50px] grid grid-cols-1 md:grid-cols-2  justify-between items-center  gap-5 bg-[#1F3343]">
      <div >
        <img src={graph}></img>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-[48px] font-bold text-white">
          <span className="text-[#00CFDE]">Interview </span> recordings
        </p>
        <p className="font-[18px] text-[#C7C9D9]">
          Learn from the best with our library of interview recordings <br></br>{" "}
          conducted by top interviewers from leading companies.
        </p>
        <div className="flex gap-2 items-center justify-center">
          <img className="w-[32px] h-[32px]" src={tick}></img>
          <p className="text-[16px] text-[#C7C9D9]">
            Master your interview skills by{" "}
            <span className="text-[#00CFDE]"> practicing the questions </span>{" "}
            asked by these top companies.
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <img className="w-[32px] h-[32px]" src={tick}></img>
          <p className="text-[16px] text-[#C7C9D9]">
            Unlock your competitive advantage by understanding{" "}
            <span className="text-[#00CFDE]"> interview feedback</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
