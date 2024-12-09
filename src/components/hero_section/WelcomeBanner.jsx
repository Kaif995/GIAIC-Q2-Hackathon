import * as React from "react";

function WelcomeBanner() {
  return (
    <div className="flex flex-col items-start self-stretch my-auto w-full capitalize text-slate-800 max-md:mt-10 max-md:max-w-full">
      <div className="text-sm tracking-widest leading-none uppercase">
        Welcome to chairy
      </div>
      <div className="self-stretch mt-6 text-6xl font-bold leading-[66px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
        Best Furniture
        <br />
        Collection for your
        <br />
        interior.
      </div>
    </div>
  );
}

export default WelcomeBanner;
