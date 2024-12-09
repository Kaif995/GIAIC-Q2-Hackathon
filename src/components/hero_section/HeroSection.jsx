import * as React from "react";
import WelcomeBanner from "./WelcomeBanner";
import ShopNowButton from "./ShopNowButton";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex flex-col justify-center items-start px-16 py-32 w-full bg-gray-100 rounded-none max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="mb-0 w-full max-w-[1141px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <WelcomeBanner />
              <ShopNowButton />
            </div>
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
