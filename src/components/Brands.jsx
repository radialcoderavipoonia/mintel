import React from "react";
import { brands } from "./common/Helper";

const Brands = () => {
  return (
    <div className="xl:max-w-[1364px]  px-3 mx-auto container lg:py-[100px] md:py-20 py-16">
      <div className="bg-white lg:py-[106px] lg:px-[102px] md:p-12  p-10 rounded-[32px] shadow-[0px_0px_57.6px_0px_rgba(11,184,157,1)]">
        <h2 className="text-center text-black lg:text-[36px] sm:text-[32px] text-[26px] ff_lulocleanone font-bold leading-[150%]">
          Brands That Trust Us
        </h2>
        <div className="flex pt-10 gap-[25px] justify-center flex-wrap ">
          {brands.map((trust, value) => (
            <a key={value} href={trust.links} target="blank">
              <div className="py-[50px] px-3 lg:w-[362px] w-[250px] border border-[#CCCCCC] hover:scale-90 transition-all duration-300 ease-in-out rounded-md flex justify-center shadow-[0px_0px_23.3px_0px_rgba(0,0,0,0.12)]">
                <img
                  src={trust.icons}
                  alt="brands icons"
                  className="lg:h-[66px] h-[50px]"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
