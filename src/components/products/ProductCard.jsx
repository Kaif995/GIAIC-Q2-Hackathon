import React from "react";
import Image from 'next/image';
import ImageGallery from "../gallery/ImageGallery";

function ProductCard({ image, badge }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col items-start px-5 pt-5 pb-64 w-full text-sm font-medium leading-none text-white capitalize whitespace-nowrap rounded-xl aspect-square max-md:pb-24 max-md:mt-6">
        <Image
          loading="lazy"
          src={image}
          alt="Product showcase"
          className="object-cover absolute inset-0 size-full"
        
        />
        {badge && (
          <div
            className={`relative gap-2.5 px-2.5 py-1.5 ${badge.color} rounded`}
          >
            {badge.text}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
