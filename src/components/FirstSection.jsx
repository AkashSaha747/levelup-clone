import React from "react";
import first from "../assets/main/Code.png";
const FirstSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0F1921 0%, #1E3243 100%)",
      }}
      className=" px-[20px] lg:px-[100px] sm:px-[50px] py-[50px] grid grid-cols-1 md:grid-cols-2  justify-between items-center  text-white gap-5"
    >
      <div className="flex flex-col gap-[20px] flex-1">
        <p className="text-[40px]  lg:text-[64px] md:text-[48px]  font-semibold leading-tight">
          Practice, learn, and excel like a
          <span className="text-[#05A660]"> Pro</span>
        </p>
        <p className="text-[18px]  ">
          Elevate your technical interview skills with our all-in-one platform.
        </p>
      
        <button className="w-[240px] h-[56px] bg-[#3E7BFA] text-white rounded-[10px]  sm:m-auto lg:m-0">
          Get started for free
        </button>
     
      </div>
      <div  className=" flex-1 sm:flex-2 md:flex-2 lg:flex-1">
        <img  src={first}></img>
      </div>

    
    </div>
  );
};

export default FirstSection;
