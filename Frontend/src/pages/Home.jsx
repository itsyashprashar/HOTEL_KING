import React from 'react';
import HeroSection from '../components/HeroSection';
import LuxuryFeatures from '../components/LuxuryFeatures';
import FeaturedRooms from '../components/FeaturedRooms';
import SpecialOffersPromo from '../components/SpecialOffersPromo';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      
      <LuxuryFeatures />
      <FeaturedRooms />
      <SpecialOffersPromo />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
