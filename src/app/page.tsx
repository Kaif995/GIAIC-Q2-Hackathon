import React from 'react';
import { Navigation } from '../components/navigation/Navigation.jsx';
import HeroSection from '../components/hero_section/HeroSection.jsx';
import BrandLogos from '../components/brandLogos/BrandLogos.jsx'
import {FeaturedProducts} from '../components/featuredProducts/FeaturedProducts.jsx';
import ImageGallery from '../components/gallery/ImageGallery.jsx';
import TopCategories from '../components/categories/TopCategories.jsx';
import ProductsSection from '../components/products/ProductsSection.jsx';
import Footer from '../components/footer/Footer.jsx';

const Page = () => {
  return (
    <>
      <Navigation />
      <div className="content">
        <HeroSection />
        <BrandLogos />
        <FeaturedProducts />
        <ImageGallery />
        <TopCategories />
        <ProductsSection />
        
        <Footer />
      </div>
    </>
  );
}

export default Page;