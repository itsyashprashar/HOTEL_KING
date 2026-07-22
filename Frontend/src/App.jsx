import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import HotelDetails from './pages/HotelDetails';
import MyBookings from './pages/MyBookings';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App;
