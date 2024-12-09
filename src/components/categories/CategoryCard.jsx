import * as React from "react";
import Image from 'next/image';
function CategoryCard({ imageSrc, title, productCount }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col pt-80 leading-none text-white capitalize rounded-2xl min-h-[424px] max-md:pt-24 max-md:mt-6 max-md:max-w-full">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={`${title} category image showing furniture`}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col p-5 rounded-none bg-black bg-opacity-70 max-md:max-w-full">
          <div className="text-xl font-semibold">{title}</div>
          <div className="mt-2 text-sm opacity-70">{productCount} Products</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
