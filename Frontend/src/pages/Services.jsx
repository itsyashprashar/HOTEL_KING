import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    { icon: "fa-concierge-bell", title: "24/7 Concierge", desc: "Personalized assistance available round the clock to cater to your every need." },
    { icon: "fa-spa", title: "Luxury Spa & Wellness", desc: "Rejuvenate with world-class spa treatments and wellness programs." },
    { icon: "fa-utensils", title: "Gourmet Dining", desc: "Experience exquisite culinary delights prepared by our Michelin-starred chefs." },
    { icon: "fa-swimming-pool", title: "Infinity Pool", desc: "Relax in our stunning infinity pool with panoramic city views." },
    { icon: "fa-dumbbell", title: "Fitness Center", desc: "Stay fit with state-of-the-art equipment and personal training sessions." },
    { icon: "fa-wifi", title: "High-Speed WiFi", desc: "Enjoy complimentary high-speed internet throughout the property." },
    { icon: "fa-shuttle-van", title: "Airport Shuttle", desc: "Convenient and timely airport shuttle service for hassle-free travel." },
    { icon: "fa-concierge-bell", title: "Room Service", desc: "Delicious meals and beverages delivered directly to your room anytime." },
    { icon: "fa-briefcase", title: "Business Center", desc: "Fully equipped business center with meeting rooms and office services." },
    { icon: "fa-paw", title: "Pet-Friendly Services", desc: "Welcoming your furry friends with special amenities and care." },
    { icon: "fa-car", title: "Valet Parking", desc: "Convenient valet parking service for your vehicle with professional care." },
    { icon: "fa-tshirt", title: "Laundry & Dry Cleaning", desc: "Professional laundry and dry cleaning services available 24/7." }
  ];

  return (
    <>
      <header className="bg-primary pt-[150px] pb-16 text-center text-white relative">
        <Navbar />
        <h1 className="font-primary text-5xl mb-4 text-white">Our Services</h1>
        <nav className="text-secondary">
          <Link to="/" className="text-white hover:text-secondary">Home</Link> &gt; <span>Services</span>
        </nav>
      </header>

      <main className="container mx-auto px-4 max-w-[1200px] py-16">
        <section className="text-center max-w-[800px] mx-auto mb-16 animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="font-primary text-4xl mb-6 text-primary">Exceptional Services Tailored for You</h2>
          <p className="text-textSecondary text-lg mb-4">
            At Luxury Hotel King, we offer a wide range of premium services designed to make your stay unforgettable.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-[15px] border border-[#eee] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <i className={`fas ${service.icon} text-4xl text-secondary mb-4`}></i>
              <h3 className="font-primary text-xl mb-4 text-primary">{service.title}</h3>
              <p className="text-textSecondary text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Services;
