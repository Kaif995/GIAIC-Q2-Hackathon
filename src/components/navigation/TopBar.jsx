import * as React from "react";
import Link from "next/link";
import Image from 'next/image';

export function TopBar() {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-3.5 w-full text-sm text-white bg-slate-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto leading-none capitalize min-w-[240px]">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/95fa6678e87733c5eab1584f552121aae7336c3f56854b526a5515574e845b85?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
          alt="Logo"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
        <div className="self-stretch my-auto">
          Free shipping on all orders over $50
        </div>
      </div>
      <div className="flex gap-6 items-start self-stretch my-auto leading-tight text-center">
        <Link href="/faq" className="flex gap-1.5 items-center whitespace-nowrap">
          <div className="self-stretch my-auto">Eng</div>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/fe5f921c21237b781b8b9f92bd3362d5eb0f8829b1c8007010582c65f92be572?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
            alt="Language Icon"
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.33] w-[7px]"
          />
        </Link>
        <Link href="/faqs">Faqs</Link>
        <Link href="/help" className="flex gap-1.5 items-start">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/cedea549c2af64a39dac2887b03c2fbdd16bd5706e88d5f25fe0c8f1eb66e05c?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
            alt="Help Icon"
            className="object-contain shrink-0 w-4 aspect-square"
          />
          <div>Need Help</div>
        </Link>
      </div>
    </div>
  );
}