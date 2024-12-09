import * as React from "react";
import CategoryCard from "./CategoryCard";

function TopCategories() {
  const categories = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/bcda9dbb69df1315aa7290bba7a061200726b7c33ed8fa5b99a080716f8e3b8f?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      title: "Wing Chair",
      productCount: "3,584",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/d80d8a1792955cff371c3b54f5d4386784cc96f9a055039f33bd8f46b27bb3a6?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      title: "Wooden Chair",
      productCount: "157",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/91c35e6788175e09e7865f848a7ad6f89db3deb4708a84ab3dc8aaa296adbc52?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      title: "Desk Chair",
      productCount: "154",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col" role="main">
      <header className="flex flex-wrap gap-10 justify-between items-center pl-2 my-5 w-full text-3xl font-semibold leading-none capitalize text-slate-800 max-md:px-5 max-md:max-w-full">
        <h1 className="self-stretch my-auto">Top categories</h1>
        <div className="flex shrink-0 self-stretch my-auto h-11 w-[106px]" />
      </header>
      <section className="self-center mt-10 w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col relative sm:mt-[50px]">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              imageSrc={category.imageSrc}
              title={category.title}
              productCount={category.productCount}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TopCategories;
