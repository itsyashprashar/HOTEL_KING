import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-[3rem] pb-[1rem]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-secondary font-primary text-[1.5rem] mb-4">HOTEL KING</h3>
            <p className="text-[#ccc] leading-[1.6] mb-4">
              Where every stay is a masterpiece of luxury and comfort. Experience unparalleled hospitality and create memories that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white text-[1.2rem] hover:text-secondary transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white text-[1.2rem] hover:text-secondary transition-colors duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white text-[1.2rem] hover:text-secondary transition-colors duration-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white text-[1.2rem] hover:text-secondary transition-colors duration-300"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-secondary font-primary text-[1.3rem] mb-4 uppercase">Quick Links</h4>
            <ul className="list-none p-0 flex flex-col gap-2">
              <li><Link to="/" className="text-[#ccc] hover:text-secondary transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-[#ccc] hover:text-secondary transition-colors duration-300">About Us</Link></li>
              <li><Link to="/rooms" className="text-[#ccc] hover:text-secondary transition-colors duration-300">Rooms & Suites</Link></li>
              <li><Link to="/services" className="text-[#ccc] hover:text-secondary transition-colors duration-300">Services</Link></li>
              <li><Link to="/rooms" className="text-[#ccc] hover:text-secondary transition-colors duration-300">Special Offers</Link></li>
              <li><Link to="/contact" className="text-[#ccc] hover:text-secondary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary font-primary text-[1.3rem] mb-4 uppercase">Contact Info</h4>
            <p className="text-[#ccc] mb-4 flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-secondary"></i> 123 Luxury Avenue, City Center
            </p>
            <p className="text-[#ccc] mb-4 flex items-center gap-2">
              <i className="fas fa-phone text-secondary"></i> +91-7828246801
            </p>
            <p className="text-[#ccc] mb-4 flex items-center gap-2">
              <i className="fas fa-envelope text-secondary"></i> info@luxuryhotelking.com
            </p>
          </div>

          <div>
            <h4 className="text-secondary font-primary text-[1.3rem] mb-4 uppercase">Newsletter</h4>
            <p className="text-[#ccc] mb-4">Subscribe for exclusive offers and updates</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="flex-1 p-2 rounded border-none text-primary focus:outline-none" 
              />
              <button 
                type="submit" 
                className="bg-secondary text-white border-none py-2 px-4 rounded cursor-pointer hover:bg-accent transition-colors duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-[rgba(255,255,255,0.1)] text-[#ccc]">
          <p>&copy; 2025 Luxury Hotel King. All rights reserved. | Designed with <i className="fas fa-heart text-accent"></i> for luxury travelers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
