import * as React from "react";
import Image from 'next/image';
function ShopNowButton() {
  return (
    <button
      className="flex gap-5 justify-center items-center px-6 py-3.5 mt-12 text-base font-semibold leading-none text-center text-white bg-cyan-600 rounded-lg max-md:px-5 max-md:mt-10"
      tabIndex="0"
      aria-label="Shop Now"
    >
      <span className="self-stretch my-auto">Shop Now</span>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/d5b980cad6dbc5f68e1971de8f18b67c8aa7f7a56cb31739d3ea860d1bf439f8?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt=""
      />
    </button>
  );
}

export default ShopNowButton;
