import * as React from "react";
import Image from 'next/image';
export function ProductInfo({ title, price, discountPrice, iconSrc }) {
  return (
    <div className="flex flex-1 gap-3">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <div className="text-base leading-tight text-slate-800">{title}</div>
        <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
          <div className="self-stretch my-auto text-lg font-semibold text-slate-800">
            ${price}
          </div>
          {discountPrice && (
            <div className="self-stretch my-auto text-sm text-zinc-400">
              ${discountPrice}
            </div>
          )}
        </div>
      </div>
      <Image
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 my-auto w-11 rounded-none aspect-square"
      />
    </div>
  );
}
