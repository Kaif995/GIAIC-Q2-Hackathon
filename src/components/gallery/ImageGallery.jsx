"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { GalleryImage } from "./GalleryImage";
import { ProductDetails } from "./ProductDetails";
import { SalesMetrics } from "./SalesMetrics";

function ImageGallery() {
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/7ce1df9eecbde4bfb2537365e70e7d88ed3c910944c4b1b9fdcebc2630f6fa76?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      size: "large",
      alt: "Main product view",
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/daa9089567313f753f631c2d95f697d4a88c9047790a53bba1c437e26a0454cb?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      size: "small",
      alt: "Product angle view",
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/41bd197490bf900731db1690ff531201b5a3c66f5475b23a3052ae9e9c1327cf?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      size: "small",
      alt: "Product detail view",
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/38837dd234c0de4854ae607255a1bbdcd18850baf4b5fce9f02a5042e716aa21?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      size: "small",
      alt: "Product close-up",
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/41bd197490bf900731db1690ff531201b5a3c66f5475b23a3052ae9e9c1327cf?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      size: "small",
      alt: "Product features view",
    },
  ];

  const productData = {
    name: "Premium Product",
    price: "$199",
    discount: "20% OFF",
    sales: 1500,
    rating: 4.5,
    reviews: 230,
  };

  async function fetchGalleryData() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  }

  useEffect(() => {
    fetchGalleryData();
  }, []);

  return (
    <main role="main" className="product-gallery max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-8">
        <section aria-label="Product Images" className="w-full lg:w-3/5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <GalleryImage
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                size="large"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setSelectedImage(
                      (selectedImage + 1) % galleryImages.length
                    );
                  }
                }}
                onClick={() =>
                  setSelectedImage((selectedImage + 1) % galleryImages.length)
                }
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.slice(1).map((image, index) => (
                  <GalleryImage
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    size="small"
                    onClick={() => setSelectedImage(index + 1)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        setSelectedImage(index + 1);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Product Information" className="w-full lg:w-2/5">
          <ProductDetails product={productData} />
          <SalesMetrics metrics={productData} />
        </section>
      </div>
    </main>
  );
}

export default ImageGallery;
