import * as React from "react";
import Image from "next/image";

export function ProductCard({ image, label, labelColor }) {
  return (
    <div className="relative flex flex-col items-start px-5 pt-5 pb-5 w-full text-sm font-medium leading-none text-white capitalize whitespace-nowrap rounded-md">
      <Image
        loading="lazy"
        src={image}
        alt={`Featured product with ${label} label`}
        className="w-full h-auto object-cover rounded-md" // Ensure full width and aspect ratio
      />
      <div className={`relative gap-2.5 px-2.5 py-1.5 ${labelColor} rounded mt-2`}>
        {label}
      </div>
    </div>
  );
}