import * as React from "react";
import Image from "next/image"; 

function HeroImage() {
  return (
    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/1e4d5dd5f9332945b3e49b6b21b180a2d7095cd5fe4d41bb94d479db01ec63fe?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
        width={800} // Specify the width of the image
        height={400} // Specify the height of the image
        className="object-contain grow w-full aspect-[0.74] max-md:mt-10 max-md:max-w-full"
        alt="Furniture collection showcase"
        placeholder = 'data:image/...'
      />
    </div>
  );
}

export default HeroImage;