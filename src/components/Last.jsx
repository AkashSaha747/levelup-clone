import React from "react";
import bg from "../assets/main/bg.png";
const Last = () => {
  return (
    <div className="px-[20px] lg:px-[100px] sm:px-[50px] py-[50px]  bg-[#1F3343] ">
      <div className="flex flex-col items-center justify-center text-center gap-5 bg-[#354756] py-5 rounded-[20px] ">
        <p className="text-[48px] font-bold text-white">
          Join for
          <span className="text-[#0063F7]"> Free </span> today
        </p>
        <p className="px-[10px] text-[18px] text-[#E4E4EB] ">
          Elevate your interview skills with practice-based learning and gain
          insights from expert mock<br></br> interviews. Supercharge your
          interview game with LevelUp today!
        </p>
        <button className=" w-[240px] h-[56px] bg-[#3E7BFA] text-white rounded-[10px]">
          Get started for free
        </button>
      </div>
    </div>
  );
};

export default Last;
