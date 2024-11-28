import { useState } from 'react'
import Logo from "../assets/header/Logo.png";
import Limage from '../assets/header/vL new.png'
import reffer from '../assets/header/Refer & Eran CTA.png'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className="w-[100%] bg-[#1F2A37] h-[80px] hidden sm:hidden  lg:flex justify-between items-center px-[100px]">
      <div className="lg:w-[130.21px] lg:h-[47.39px]">
        <img src={Logo}></img>
      </div>
      <div className="flex  items-center text-white font-medium text-[14px] text-center gap-10">
        <div className="flex justify-between items-center gap-7">
          <div className="w-[52px] h-[32px]"><img src={Limage}></img></div>
          <div>Interview</div>
          <div>Our Experts</div>
          <div className="w-[126px] h-[32px]">
            <img src={reffer}></img>
          </div>
        </div>
        <div>
          <button className="text-white px-4 py-2 rounded border-[2px] border-[rgba(91,141,239,1)] text-[rgba(91,141,239,1)]">
            Register
          </button>
        </div>
      </div>
    </div>
    <div className="w-[100%] bg-[#1F2A37] h-[80px]  px-[50px] flex sm:flex lg:hidden justify-between items-center">
      <img src={Logo} className=' w-[130.21px] h-[47.39px]'></img>
    <button 
  className="text-[#ffffff]" 
  onClick={() => setOpen(true)}
>
  <GiHamburgerMenu size={"30px"}/>
</button>
    </div>


    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md  transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className=" bg-[#1F2A37] flex h-full flex-col overflow-y-scroll  py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold text-gray-900 w-[130.21px] h-[47.39px]">
                    <img src={Logo}></img>
                  </DialogTitle>
                  <hr></hr>
                </div>
                <div className="relative flex flex-col justify-start text-[white] mt-6 flex-1 px-4 sm:px-6 gap-5">
                <div className="w-[52px] h-[32px]"><img src={Limage}></img></div>
          <div>Interview</div>
          <div>Our Experts</div>
          <div className="w-[126px] h-[32px]">
            <img src={reffer}></img>
          </div>

                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
    </>
  );
};

export default Header;
