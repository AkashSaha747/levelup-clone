import React from 'react'
import step from "../assets/main/step.png"
import tick from "../assets/main/tick.png"
const Fourth = () => {
  return (
    <div className="px-[20px] lg:px-[100px] sm:px-[50px] py-[50px] grid grid-cols-1 md:grid-cols-2  justify-between items-center  gap-5 bg-[#1F3343]">
      <div className="flex  flex-col gap-8">
        <p className="text-[48px] font-bold text-white">
        <span className="text-[#3E7BFA]">Daily </span>
         quiz
        </p>
        <p className="font-[18px] text-[#C7C9D9]">
        Answer the daily question to stay on top of your interview<br></br> preparation.
        </p>
        <div className="flex gap-2 items-center justify-center">
          <img className="w-[32px] h-[32px]" src={tick}></img>
          <p className="text-[16px] text-[#C7C9D9]">
           
            <span className="text-[#AC5DD9]">
            Challenge yourself </span> 
            with a daily quiz that tests your technical knowledge and problem-solving skills.
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <img className="w-[32px] h-[32px]" src={tick}></img>
          <p className="text-[16px] text-[#C7C9D9]">
           
            <span className="text-[#AC5DD9]">
            Keep your skills sharp </span> 
             by regularly engaging in quick, bite-sized coding challenges.
          </p>
        </div>
     
      </div>
      <div >
        <img src={step}></img>
      </div>
    </div>
  )
}

export default Fourth
