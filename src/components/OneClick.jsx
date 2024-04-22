import React from "react";
import { oneClick } from "./common/Helper";

const OneClick = () => {
  return (
    <div className="xl:max-w-[1140px] xl:px-0 px-3 container mx-auto lg:py-0 md:py-20 py-16">
      <h2 className="text-white text-center ff_lulocleanone font-bold lg:text-[36px] sm:text-[32px] text-[26px] leading-[120%] max-w-[706px] mx-auto">
        One-click install on any crm & sep
      </h2>
      <div className="pt-[60px] flex gap-6 items-center justify-center flex-wrap max-[400px]:flex-col flex-row">
        {oneClick.map((any, value) => (
          <a key={value} href={any.links} target="blank">
            <div className="flex rounded-[200px] items-center px-[18px] py-[22px] border-[1px] border-[#133631] h-[80px] w-[170px] shadow-[0px_0px_30px_0px_rgba(11,184,157,0.3)] hover:scale-90 transition-all duration-200 ease-in-out">
              <img src={any.icons} alt="one click icons" />
              <p className="text-white ps-3 text-[20px] leading-[121%] ff_proximanova_bold font-bold">
                {any.title}
              </p>
            </div>
          </a>
        ))}
      </div>
      <p className="text-white text-center lg:text-[24px] md:text-[20px] text-[18px] pt-11 ff_proximanova_bold font-bold">
        +25 other GTM systems
      </p>
    </div>
  );
};

export default OneClick;
