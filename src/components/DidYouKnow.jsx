import React from "react";
import { salesPeople } from "./common/Helper";

const DidYouKnow = () => {
  return (
    <div className="relative">
      <div className="xl:max-w-[1140px] xl:px-0 px-3 container mx-auto lg:pt-[82px] lg:pb-[120px] md:py-20 py-16">
        <h2 className="text-center text-white ff_lulocleanone font-bold lg:text-[36px] sm:text-[32px] text-[26px] leading-[120%]">
          Did you know?
        </h2>
        <p className="pt-[14px] text-center text-white lg:text-[24px] md:text-[20px] text-[18px] leading-[124%] ff_proximanova_bold font-bold">
          Salespeople suffer, instead of selling
        </p>
        <div className="lg:pt-20 md:pt-16 pt-12 mt-2 flex lg:justify-between justify-center flex-wrap lg:flex-nowrap items-center lg:gap-[25px] gap-4">
          {salesPeople.map((know, value) => (
            <div
              key={value}
              className="border-[#062923] border-[1px] rounded-xl py-8 px-[51px] bg-[#050505] hover:bg-[#011210] w-[364px] group transition-all duration-300 ease-in-out hover:shadow-[0px_0px_12px_6px_rgba(11,184,157,0.2)] lg:h-[unset] h-[252px]"
            >
              <div className="flex items-center flex-col">
                <span>{know.Icon}</span>
                <p className="text-white pt-6 text-center lg:text-[24px] md:text-[20px] text-[18px] leading-[124%]">
                  {know.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[192px] h-[192px] bg-[rgba(11,184,157,1)] rounded-[100%] blur-[90px] absolute right-[-152px] bottom-[0%] pointer-events-none lg:block hidden"></div>
    </div>
  );
};

export default DidYouKnow;
