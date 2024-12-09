import React from "react";
import Image from 'next/image';
import ImageGallery from "../gallery/ImageGallery";

function ProductItem({ title, price, oldPrice, iconSrc, titleColor }) {
  return (
    <div className="flex flex-1 gap-3">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <div className={`text-base leading-tight ${titleColor}`}>{title}</div>
        <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
          <div className="self-stretch my-auto text-lg font-semibold text-slate-800">
            ${price}
          </div>
          {oldPrice && (
            <div className="self-stretch my-auto text-sm text-zinc-400">
              ${oldPrice}
            </div>
          )}
        </div>
      </div>
      <Image
        loading="lazy"
        src={iconSrc}
        alt="Product icon"
        className="object-contain shrink-0 my-auto w-11 rounded-none aspect-square"
      />
    </div>
  );
}

export default ProductItem;
