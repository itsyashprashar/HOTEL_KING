import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine auth state based on localStorage token presence
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ROOMS', path: '/rooms' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' }
  ];

  if (!isAuthenticated) {
    baseLinks.push({ name: 'SIGN IN', path: '/signin' });
  } else {
    baseLinks.push({ name: 'MY BOOKINGS', path: '/my-bookings' });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-colors duration-300 flex justify-between items-center py-4 px-8 ${isScrolled ? 'bg-primary/95 backdrop-blur-[10px]' : 'bg-primary/95 backdrop-blur-[10px]'}`}>
      <div className="flex flex-col">
        <h1 className="font-primary text-secondary text-3xl m-0 uppercase tracking-wider">HOTEL KING</h1>
        <p className="font-secondary text-accent text-xs italic m-0">Where Elegance Meets Comfort</p>
      </div>

      <div className="hidden md:flex gap-8 text-sm">
        <p className="flex items-center gap-2 m-0 text-white">
          <i className="fas fa-phone text-secondary"></i> +91-7828246801
        </p>
        <p className="flex items-center gap-2 m-0 text-white">
          <i className="fas fa-envelope text-secondary"></i> reservations@luxuryhotelking.com
        </p>
      </div>

      <div className="hidden md:block">
        <ul className="flex list-none gap-8 m-0 p-0 text-white font-medium items-center">
          {baseLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-white decoration-none transition-colors relative hover:text-secondary group ${
                  location.pathname === link.path ? 'text-secondary' : ''
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-[5px] left-0 w-full h-[2px] bg-secondary transition-transform origin-left ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </li>
          ))}
          {isAuthenticated && (
            <li>
              <button 
                onClick={handleLogout}
                className="bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white px-4 py-1 rounded transition-colors text-sm font-bold tracking-wider"
              >
                LOGOUT
              </button>
            </li>
          )}
        </ul>
      </div>

      <div 
        className="block md:hidden text-2xl text-white cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-secondary`}></i>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-primary border-t border-[#333] shadow-lg md:hidden z-[1001]">
          <ul className="flex flex-col list-none m-0 p-4 gap-4 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-white decoration-none hover:text-secondary ${
                    location.pathname === link.path ? 'text-secondary font-bold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
