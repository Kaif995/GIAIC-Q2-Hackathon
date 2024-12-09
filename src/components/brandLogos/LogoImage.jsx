import * as React from "react";
import Image from 'next/image';
function LogoImage({ src, width }) {
  return (
    <Image
      loading="lazy"
      src={src}
      alt=""
      className={`object-contain shrink-0 self-stretch my-auto aspect-[0.97] w-[${width}px]`}
    />
  );
}

export default LogoImage;
