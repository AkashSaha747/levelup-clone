import React from "react";
import logo2 from "../assets/footer/Logo2.png";
import tw from "../assets/footer/1.png";
import fb from "../assets/footer/2.png";
import insta from "../assets/footer/3.png";
import linkdin from "../assets/footer/4.png";
import yt from "../assets/footer/5.png";
const Footer = () => {
  return (
    <div className="px-[20px] lg:px-[100px] sm:px-[50px] py-[50px]  bg-[#1F2A37]">
      <div className="grid justify-between items-center sm:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between items-start  gap-3">
          <img src={logo2} className="w-[130px] h-[31.75px]"></img>
          <p className="text-[#C7C9D9] text-[16px]">
            Elevate your Job Search & Boost Your Chances of Landing Top-Tier
            Company Interviews with Expert Guidance from Industry Evaluators
          </p>
          <div className="flex flex-wrap gap-2">
            <img className="w-[28px] h-[28px]" src={tw}></img>
            <img className="w-[28px] h-[28px]" src={fb}></img>
            <img className="w-[28px] h-[28px]" src={insta}></img>
            <img className="w-[28px] h-[28px]" src={linkdin}></img>
            <img className="w-[28px] h-[28px]" src={yt}></img>
          </div>
        </div>
        <div className=" lg:ml-[200px]">
          <p className="text-[#3E7BFA] text-[13px] font-semibold  sm:mt-5 lg:mt-0">Links</p>
          <div className="px-2 font-medium text-[14px] flex flex-col gap-3 mt-3 text-[white]">
            <p>Plans</p>
            <p>Become an Expert</p>
            <p>Hire via LevelUp</p>
          </div>
        </div>
        <div className="">
          <p className="text-[#3E7BFA] text-[13px] font-semibold">COMPANY</p>
          <div className="px-2 font-medium text-[14px] flex flex-col gap-3 mt-3 text-[white]">
            <p>About</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <hr className="mt-4 border-[#C7C9D9]"></hr>
      <p className="text-[14px] text-[#C7C9D9] text-center mt-4">© Copyright 2023, All Rights Reserved by LevelUp | A Nolan Edutech Pvt Ltd Venture</p>
    </div>
  );
};

export default Footer;
