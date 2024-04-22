import React from "react";
import { Linkedin } from "./common/Icons";

const Compatible = () => {
  return (
    <div className="relative">
      <div className="max-w-[829px] mx-auto xl:px-0 px-3 lg:py-0 md:py-20 py-16">
        <h2 className="text-white text-center ff_lulocleanone font-bold lg:text-[36px] sm:text-[32px] text-[26px] leading-[120%]">
          COMPATIBLE WITH
        </h2>
        <div className="lg:pt-[60px] md:pt-14 pt-12 flex justify-center flex-wrap md:gap-[104px] sm:gap-10 gap-6 sm:flex-row flex-col">
          <div className="flex justify-center items-center gap-1">
            <a href="https://www.linkedin.com/" target="blank">
              <Linkedin />
            </a>
            <p className="text-white ff_proximanova_bold font-bold xl:text-[34px] md:text-[28px] text-[24px] leading-[121%]">
              Recruiter
            </p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p className="text-white ff_proximanova_bold font-bold xl:text-[34px] md:text-[28px] text-[24px] leading-[121%]">
              Linked
            </p>
            <a href="https://www.linkedin.com/" target="blank">
              <Linkedin />
            </a>
          </div>
          <div className="flex justify-center items-center gap-1">
            <a href="https://www.linkedin.com/" target="blank">
              <Linkedin />
            </a>
            <p className="text-white ff_proximanova_bold font-bold xl:text-[34px] md:text-[28px] text-[24px] leading-[121%]">
              Sales Navigator
            </p>
          </div>
        </div>
      </div>
      <div className="w-[192px] h-[192px] bg-[rgba(11,184,157,1)] rounded-[100%] blur-[90px] absolute left-[-96px] bottom-[0%] pointer-events-none lg:block hidden"></div>
    </div>
  );
};

export default Compatible;
