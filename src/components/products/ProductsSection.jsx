import React from "react";
import ProductCard from "./ProductCard";
import ProductItem from "./ProductItem";

const products = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/70b0d0e952fe89c9e655cc56c90cd96427434b98025c230259224f8fd3a33665?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    badge: { text: "New", color: "bg-emerald-600" },
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/44ca6870cd88d066e9cec1f199c8ae1598a80871d99636307e717eae1366f32c?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    badge: { text: "Sales", color: "bg-orange-400" },
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/0f39e547b8d4a7de521aef03638c6a373d4171e21ba6e7a2f1beae6359076e70?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    badge: null,
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/563a5ed01cfdd9e04ac9a920775b81fe892edd74376d3be9f8637c282fb16d84?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    badge: null,
  },
];

const productItems = [
  {
    id: 1,
    title: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/a36daba62a6bcc93f89ebdbcfffe4129202842d0cc25625e83c1eb4551d5fefd?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    titleColor: "text-cyan-700",
  },
  {
    id: 2,
    title: "Library Stool Chair",
    price: 20,
    oldPrice: 39,
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/c7739b2141a0b49828a6a841665284a081bd39addbb4d17021eb095c2fb33d93?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    titleColor: "text-slate-800",
  },
  {
    id: 3,
    title: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/b72fa17bc232bb87a6492bd92b5649351453d180c0d9295ca1f4a4f079450570?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    titleColor: "text-slate-800",
  },
  {
    id: 4,
    title: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/b72fa17bc232bb87a6492bd92b5649351453d180c0d9295ca1f4a4f079450570?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
    titleColor: "text-slate-800",
  },
];

function ProductsSection() {
  return (
    
    <main className="flex overflow-hidden flex-col">
      <h1 className="mt-4 self-center text-3xl font-semibold leading-none capitalize text-slate-800">
        Our Products
      </h1>

      <section
        className="mt-20 w-full max-md:mt-10 max-md:max-w-full"
        aria-label="Product Grid Section 1"
      >
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section
        className="flex flex-wrap gap-6 mt-3.5 w-full capitalize max-md:max-w-full"
        aria-label="Product Items Section 1"
      >
        {productItems.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </section>

      <section
        className="mt-10 w-full max-md:max-w-full"
        aria-label="Product Grid Section 2"
      >
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section
        className="flex flex-wrap gap-6 mt-3.5 w-full capitalize max-md:max-w-full"
        aria-label="Product Items Section 2"
      >
        {productItems.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default ProductsSection;
