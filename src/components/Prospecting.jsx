import React from "react";
import { prospecting } from "./common/Helper";
import { Arrow } from "./common/Icons";

const Prospecting = () => {
  return (
    <div className="xl:max-w-[1364px]  px-3 mx-auto container lg:pt-[120px] lg:pb-[146px] md:py-20 py-16">
      <div className="bg-white rounded-[32px] lg:py-20 lg:px-[100px] md:p-12 p-10 shadow-[0px_0px_57.6px_0px_rgba(11,184,157,1)]">
        <h2 className="text-center ff_lulocleanone font-bold lg:text-[36px] sm:text-[32px] text-[26px] leading-[120%] text-black max-w-[487px] mx-auto">
          Prospecting on auto-pilot
        </h2>
        <p className="text-center text-black pt-[14px] ff_proximanova_bold font-bold lg:text-[24px] md:text-[20px] text-[18px] leading-[124%]">
          Find buyers while you sleep
        </p>
        <div className="lg:pt-[60px] md:py-14 py-10 flex xl:justify-between justify-center xl:gap-0 lg:gap-16 gap-24 relative flex-wrap ">
          {prospecting.map((auto, value) => (
            <div key={value} className="text-center">
              <div className="flex justify-center ">
                <span>{auto.img}</span>
              </div>
              <p className="max-w-[297px] lg:text-[24px] md:text-[20px] text-[18px] text-black ff_proximanova_semibold font-semibold leading-[124%] pt-[38px]">
                {auto.description}
              </p>
            </div>
          ))}

          <span className="absolute xl:top-[30%] lg:top-[21%] top-[35%] xl:left-[28%] sm:left-[47%] left-[42%] lg:rotate-0 rotate-[90deg]">
            <Arrow />
          </span>
          <span className="absolute xl:top-[30%] lg:top-[50%] top-[68%] xl:right-[28%] lg:right-[47%] sm:right-[46%] right-[41%] xl:rotate-0 rotate-[90deg]">
            <Arrow />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Prospecting;
