import * as React from "react";
import Link from "next/link";
import Image from 'next/image';

export function BrandBar() {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-5 w-full font-medium whitespace-nowrap bg-gray-100 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto text-2xl leading-tight text-slate-800">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/9d1975e3224985e22b3577cbf57f8bbe64a2020eea7f0320a8849f65b8ad19bc?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
          alt="Comforty Logo"
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
        <Link href="/" className="self-stretch my-auto">Comforty</Link>
      </div>
      <div className="flex gap-3 items-center self-stretch my-auto">
        <Link href="/shop" className="hover:text-blue-600">Shop</Link>
        <Link href="/about" className="hover:text-blue-600">About Us</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </div>
  );
}