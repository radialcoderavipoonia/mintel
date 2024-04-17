import React from "react";
import logo from "../assets/images/hero/logo.png";
import heroimg from "../assets/images/hero/hero_gif.gif";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="xl:max-w-[1140px] xl:px-0 px-3 container mx-auto">
          <div className="relative z-30">
            <div className="pt-[31px]">
              <a href="/">
                <img
                  src={logo}
                  alt="page logo"
                  className="w-[200px] h-[36px]"
                />
              </a>
            </div>
            <h1 className="pt-[93px] text-center max-w-[854px] text-white lg:text-[64px] md:text-[48px] sm:text-[40px] text-[34px] mx-auto ff_lulocleanone leading-[120%] font-bold">
              Stop searching start closing
            </h1>
            <p className="text-center text-white pt-8 font-bold lg:text-[24px] md:text-[20px] text-[18px] leading-[124%] ff_proximanova_bold">
              Helping salespeople connect to their key decision makers,
              automatically.
            </p>
            <div className="flex justify-center">
              <button className="mt-8 bg-[#0BB89D] rounded-lg w-[147px] h-[51px] flex justify-center items-center text-white text-base leading-[120%] ff_proximanova_regular font-normal border-[1px] border-transparent hover:border-[#0BB89D] hover:text-[#0BB89D] hover:bg-transparent hover:scale-105 transition-all duration-300 ease-in-out">
                {" "}
                Early Access
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={heroimg}
              alt="hero center image"
              className=" sm:w-[550px] w-[350px] sm:h-[632px] h-[352px] object-cover overflow-hidden object-top"
            />
          </div>
        </div>
        <div className="w-[192px] h-[192px] bg-[rgba(11,184,157,1)] rounded-[100%] blur-[90px] absolute left-[-141px] top-[50%] pointer-events-none lg:block hidden"></div>
        <div className="w-[192px] h-[192px] bg-[rgba(11,184,157,1)] rounded-[100%] blur-[90px] absolute right-[-152px] top-[30%] pointer-events-none lg:block hidden"></div>
      </div>
    </>
  );
};

export default Hero;
