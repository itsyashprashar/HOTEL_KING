import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Gallery = () => {
  const images = [
    "Hotel.jpg", "Room-1.jpg", "Room-2.jpg", "Room-3.jpg",
    "Staff-1.jpg", "Staff-2.jpg", "staff-3.jpg", "Room-4.jpg",
    "Room-5.jpg", "Room-6.jpg", "Staff-4.1.jpg", "Staff-5.jpg"
  ];

  return (
    <>
      <header className="bg-primary pt-[150px] pb-16 text-center text-white relative">
        <Navbar />
        <h1 className="font-primary text-5xl mb-4 text-white">Gallery</h1>
        <nav className="text-secondary">
          <Link to="/" className="text-white hover:text-secondary">Home</Link> &gt; <span>Gallery</span>
        </nav>
      </header>

      <main className="bg-white py-[4rem]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <section className="text-center max-w-[800px] mx-auto mb-16 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="font-primary text-3xl mb-4 text-primary">Explore Our Stunning Spaces</h2>
            <p className="text-textSecondary text-lg">
              Browse through our curated collection of images showcasing the elegance and luxury of Luxury Hotel King.
            </p>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded animate-[fadeInUp_0.6s_ease-out] group cursor-pointer aspect-square">
                <img 
                  src={`https://hotel-king-nu.vercel.app/Photos/${img}`} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            ))}
          </section>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Gallery;
