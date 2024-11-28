import React from "react";
import three from "../assets/main/three.png";
const Fifth = () => {
  return (
    <div className="px-[20px] lg:px-[100px] sm:px-[50px] py-[50px] grid grid-cols-1 md:grid-cols-2  justify-between items-center  gap-5 bg-[#1F3343]">
      <div className="flex  flex-col gap-8">
        <p className="text-[48px] font-bold text-white">
          How
          <span className="text-[#00CFDE]"> Levels </span>
          works on LevelUp
        </p>
        <p className="font-[18px] text-[#C7C9D9]">
          Elevate your level by practicing, improving your skills and through<br></br>
          Technical Rounds. Unlock job opportunities that match your level and<br></br>
          skills.
        </p>
      </div>
      <div>
        <img className="w-[428px]" src={three}></img>
      </div>
    </div>
  );
};

export default Fifth;
