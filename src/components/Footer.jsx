import React from "react";
import linkedIn from "../assets/images/footer/linked-in.png";
import goggle from "../assets/images/footer/goggle.png";
import microsoft from "../assets/images/footer/microsoft.png";
import aws from "../assets/images/footer/aws.png";
const Footer = () => {
  return (
    <div className=" relative ">
      <div className="max-w-[1140px] mx-auto xl:px-0 px-3 relative z-10 lg:pt-0 md:pt-16 pt-12">
        <div className=" flex flex-wrap justify-between gap-y-5 mb-[60px]">
          <div className="xl:w-5/12 lg:w-6/12 w-full xl:px-0 lg:px-2">
            <p className="text-white lg:text-[36px] max-w-[321px] sm:text-[32px] text-[26px] ff_lulocleanone font-bold leading-[150%] mb-[32px]">
              Stay in the Know
            </p>
            <p className="text-white lg:text-[24px] md:text-[20px] text-[18px] ff_proximanova_bold font-bold mb-4">
              Join the waiting list
            </p>
            <div className=" border border-[#3D3D3D] rounded flex max-w-[447px]">
              <input
                type="email"
                required
                className=" bg-transparent w-full placeholder:ff_proximanova_regular placeholder:font-normal placeholder:text-base text-[#B2B2B2] p-4"
                placeholder="Enter your business email"
              />
              <button className=" bg-[#0BB89D] ff_proximanova_regular font-normal text-base py-4 px-[29px] rounded text-nowrap text-white border border-[#0BB89D] hover:bg-transparent hover:text-[#0BB89D] transition-all ease-in-out duration-300">
                Sign Up
              </button>
            </div>
          </div>
          <div className="xl:w-5/12 lg:w-6/12 w-full xl:px-0 lg:px-2">
            <p className=" lg:text-[24px] md:text-[20px] text-[18px] text-white ff_proximanova_semibold font-semibold leading-[124%] mb-4">
              Follow Us
            </p>

            <a href="www.linkedIn.com" target="blank">
              <img
                src={linkedIn}
                alt="linkedIn"
                className=" max-w-20 transition-all ease-in-out duration-300 hover:scale-110"
              />
            </a>
            <p className=" lg:text-[24px] md:text-[20px] text-[18px] text-white ff_proximanova_semibold font-semibold leading-[124%] mb-4 mt-[32px]">
              Backed by
            </p>
            <div className=" flex gap-4 sm:flex-row flex-col">
              <img
                src={goggle}
                alt="goggle"
                className=" max-w-[100px] hover:scale-95  transition-all ease-in-out duration-300"
              />
              <img
                src={microsoft}
                alt="microsoft"
                className=" max-w-[130px] hover:scale-95  transition-all ease-in-out duration-300"
              />
              <img
                src={aws}
                alt="microsoft"
                className=" max-w-[183px] hover:scale-95  transition-all ease-in-out duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[1px] w-full bg-[#3D3D3D]"></div>
      <p className=" py-4 text-[#B2B2B2] ff_proximanova_regular font-normal md:text-[18px] text-base text-center">
        © All Rights Reserved {new Date().getFullYear()} | Mintel AI
      </p>
      <div className="w-[192px] h-[192px] bg-[rgba(11,184,157,1)] rounded-[100%] blur-[90px] absolute right-[-134px] top-[5%] pointer-events-none lg:block hidden"></div>
    </div>
  );
};

export default Footer;
