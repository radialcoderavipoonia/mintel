import React from "react";
import {
  AccurateData,
  Clock,
  Focus,
  SaveTime,
  Streamlined,
} from "./common/Icons";

const Mintelize = () => {
  return (
    <div className="relative">
      <div className="xl:max-w-[1140px] xl:px-0 px-3 container mx-auto lg:py-[142px] md:py-20 py-16">
        <h2 className="text-white text-center ff_lulocleanone font-bold lg:text-[36px] sm:text-[32px] text-[26px] leading-[120%]">
          Mintelize It
        </h2>
        <div className="pt-[60px] flex gap-6 justify-center flex-wrap">
          <div className="bg-black relative group transition-all duration-300 hover:shadow-[0px_0px_18.5px_0px_rgba(11,184,157,0.3)] hover:bg-[#02251F] max-w-[267px] w-full py-8 px-5 lg:h-[560px] border-[1px] border-[#02251F] rounded-md">
            <div className="flex items-center flex-col">
              <span>
                <SaveTime />
              </span>
              <p className="text-white pt-6 ff_proximanova_bold font-bold text-[26px] leading-[120%] text-center">
                Save Time on Prospecting
              </p>
              <div className="mt-[14px] rounded-xl px-8 py-4 flex items-center gap-[22px] border border-[#525252]">
                <span>
                  <Clock />
                </span>
                <p className="text-white ff_proximanova_semibold font-semibold text-[32px] leading-[150%]">
                  100 h
                </p>
              </div>
            </div>
            <div className="bg-[#0BB89D] h-[3px] w-full hidden group-hover:block absolute bottom-0 left-0"></div>
          </div>
          <div className="bg-black relative group transition-all duration-300 hover:shadow-[0px_0px_18.5px_0px_rgba(11,184,157,0.3)] hover:bg-[#02251F] max-w-[267px] w-full py-8 px-5 lg:h-[560px]  border-[1px] border-[#02251F] rounded-md">
            <div className="flex items-center flex-col">
              <span>
                <AccurateData />
              </span>
              <p className="text-white pt-6 ff_proximanova_bold font-bold text-[26px] leading-[120%] text-center">
                Accurate Contact Data
              </p>
              <p className="text-[#C3C3C3] text-center pt-[10px] ff_proximanova_regular font-normal lg:text-[24px] md:text-[20px] text-[18px] leading-[150%]">
                Don't miss out on potential buyers. Our waterfall enrichment
                allows you to tap into 15+ top data providers.{" "}
                <span className="ff_proximanova_bold font-bold text-white">
                  If you can't find the contact info, no one can.
                </span>
              </p>
            </div>
            <div className="bg-[#0BB89D] h-[3px] w-full hidden group-hover:block absolute bottom-0 left-0"></div>
          </div>
          <div className="bg-black relative group transition-all duration-300 hover:shadow-[0px_0px_18.5px_0px_rgba(11,184,157,0.3)] hover:bg-[#02251F] max-w-[267px] w-full py-8 px-5 lg:h-[560px] border-[1px] border-[#02251F] rounded-md">
            <div className="flex items-center flex-col">
              <span>
                <Streamlined />
              </span>
              <p className="text-white pt-6 ff_proximanova_bold font-bold text-[26px] leading-[120%] text-center">
                Streamlined Lead Distribution
              </p>
              <p className="text-[#C3C3C3] text-center pt-[10px] ff_proximanova_regular font-normal lg:text-[24px] md:text-[20px] text-[18px] leading-[150%]">
                Our smart lead routing system ensures leads are quickly and
                efficiently assigned to the right sales rep,
                <span className="ff_proximanova_bold font-bold text-white">
                  fostering better team collaboration.
                </span>
              </p>
            </div>
            <div className="bg-[#0BB89D] h-[3px] w-full hidden group-hover:block absolute bottom-0 left-0"></div>
          </div>
          <div className="bg-black relative group transition-all duration-300 hover:shadow-[0px_0px_18.5px_0px_rgba(11,184,157,0.3)] hover:bg-[#02251F] max-w-[267px] w-full py-8 px-5 lg:h-[560px] border-[1px] border-[#02251F] rounded-md">
            <div className="flex items-center flex-col">
              <span>
                <Focus />
              </span>
              <p className="text-white pt-6 ff_proximanova_bold font-bold text-[26px] leading-[120%] text-center">
                Focus on Selling, Not Searching
              </p>
              <p className="text-[#C3C3C3] text-center pt-[10px] ff_proximanova_regular font-normal lg:text-[24px] md:text-[20px] text-[18px] leading-[150%]">
                Redirect the time saved from manual prospecting towards engaging
                with prospects, nurturing leads, and
                <span className="ff_proximanova_bold font-bold text-white">
                  closing deals for increased revenue.
                </span>
              </p>
            </div>
            <div className="bg-[#0BB89D] h-[3px] w-full hidden group-hover:block absolute bottom-0 left-0"></div>
          </div>
        </div>
      </div>
      <div className="w-[192px] h-[192px] bg-[rgba(11,184,157,1)] rounded-[100%] blur-[90px] absolute right-[-134px] top-[35%] pointer-events-none lg:block hidden"></div>
    </div>
  );
};

export default Mintelize;
