import * as React from "react";
import { ProductCard } from "./ProductCard";
import { ProductInfo } from "./ProductInfo";

const productCards = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/70b0d0e952fe89c9e655cc56c90cd96427434b98025c230259224f8fd3a33665?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    label: "New",
    labelColor: "bg-emerald-600",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/44ca6870cd88d066e9cec1f199c8ae1598a80871d99636307e717eae1366f32c?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    label: "Sales",
    labelColor: "bg-orange-400",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/0f39e547b8d4a7de521aef03638c6a373d4171e21ba6e7a2f1beae6359076e70?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    label: "",
    labelColor: "",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/563a5ed01cfdd9e04ac9a920775b81fe892edd74376d3be9f8637c282fb16d84?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    label: "",
    labelColor: "",
  },
];

const productInfo = [
  {
    title: "Library Stool Chair",
    price: "20",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/bceed32bad627e49107325de91b44cbcf31b75ecc743f024f466507e3c3a1d13?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
  },
  {
    title: "Library Stool Chair",
    price: "20",
    discountPrice: "39",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/4d4ebb803d839f868416ccd2981101a69ec9cff349067e9b566edc27ed824a38?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
  },
  {
    title: "Library Stool Chair",
    price: "20",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/cdab30b864094cb2c2c5871e0dae57fe1652b56ee4bac3708766197be47f0b84?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
  },
  {
    title: "Library Stool Chair",
    price: "20",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/cdab30b864094cb2c2c5871e0dae57fe1652b56ee4bac3708766197be47f0b84?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
  },
];

export function FeaturedProducts() {
  return (
    <section
      className="flex overflow-hidden flex-col items-center"
      role="region"
      aria-label="Featured Products"
    >
      <header className="flex flex-wrap gap-10 justify-between items-center self-stretch pl-2 w-full text-3xl font-semibold leading-none capitalize text-slate-800 max-md:px-5 max-md:max-w-full">
        <h2 className="self-stretch my-auto">Featured Products</h2>
        <div className="flex shrink-0 self-stretch my-auto h-11 w-[106px]" />
      </header>
      <div className="mt-10 w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {productCards.map((card, index) => (
            <div key={index} className="flex flex-col w-full max-w-[300px] mx-auto">
              <ProductCard {...card} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-3.5 w-full capitalize max-w-[1320px] max-md:max-w-full">
        {productInfo.map((info, index) => (
          <ProductInfo key={index} {...info} />
        ))}
      </div>
    </section>
  );
}
