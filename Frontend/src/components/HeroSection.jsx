import React from 'react';
import { Link } from 'react-router-dom';
import BookingWidget from './BookingWidget';
import Navbar from './Navbar';
import HotelBg from '../assets/images/Hotel.jpg';

const HeroSection = () => {
  return (
    <header className="relative min-h-screen text-white bg-primary">
      {/* Background Image logic using inline style for exact match of gradient + image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(26, 26, 46, 0.7)), url(${HotelBg})`
        }}
      ></div>

      <Navbar />

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(45deg,rgba(26,26,46,0.6),rgba(191,161,74,0.3))] pointer-events-none"></div>

      <div className="relative z-[2] flex h-screen items-center justify-center text-center px-8">
        <div className="max-w-[800px] animate-[fadeInUp_0.6s_ease-out]">
          <h3 className="font-primary text-[1.2rem] text-accent mb-4 tracking-[3px] uppercase">
            — Exquisite Luxury Living —
          </h3>
          <h1 className="font-primary text-[3.5rem] leading-[1.2] text-white mb-6">
            Discover A World of Unparalleled Luxury
          </h1>
          <p className="text-[1.1rem] text-white leading-[1.6] mb-8">
            Experience the epitome of sophistication and comfort at Luxury Hotel King. 
            Where every moment is crafted to perfection and every stay becomes a cherished memory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/rooms" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded font-semibold transition-all duration-300 hover:bg-accent hover:-translate-y-[2px] shadow-[0_10px_25px_rgba(191,161,74,0.3)]">
              EXPLORE ROOMS
            </Link>
            <Link to="/rooms" className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded font-semibold transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-[2px]">
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>

      <BookingWidget />
    </header>
  );
};

export default HeroSection;
