import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <header className="bg-primary pt-[150px] pb-16 text-center text-white relative">
        <Navbar />
        <h1 className="font-primary text-5xl mb-4 text-white">Contact Us</h1>
        <nav className="text-secondary">
          <Link to="/" className="text-white hover:text-secondary">Home</Link> &gt; <span>Contact</span>
        </nav>
      </header>

      <main className="bg-background py-[4rem]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <section className="text-center mb-16 animate-[fadeInUp_0.6s_ease-out]">
            <h3 className="text-secondary font-primary text-[1.1rem] tracking-[2px] mb-4 uppercase">— GET IN TOUCH —</h3>
            <h2 className="font-primary text-4xl mb-4 text-primary">Multiple Ways to Connect</h2>
            <p className="text-textSecondary text-lg max-w-[600px] mx-auto">
              Choose the most convenient way to reach our luxury concierge team
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-[15px] border border-[#eee] text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <i className="fas fa-phone text-4xl text-secondary mb-4"></i>
              <h4 className="font-primary text-xl mb-2 text-primary">Phone</h4>
              <p className="text-textSecondary mb-2">+91-7828246801</p>
              <span className="text-xs text-secondary font-bold uppercase">24/7 concierge service</span>
            </div>
            <div className="bg-white p-8 rounded-[15px] border border-[#eee] text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <i className="fas fa-envelope text-4xl text-secondary mb-4"></i>
              <h4 className="font-primary text-xl mb-2 text-primary">Email</h4>
              <p className="text-textSecondary mb-2">info@luxuryhotelking.com</p>
              <span className="text-xs text-secondary font-bold uppercase">Response within 2 hours</span>
            </div>
            <div className="bg-white p-8 rounded-[15px] border border-[#eee] text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <i className="fas fa-map-marker-alt text-4xl text-secondary mb-4"></i>
              <h4 className="font-primary text-xl mb-2 text-primary">Location</h4>
              <p className="text-textSecondary mb-2">123 Luxury Avenue</p>
              <span className="text-xs text-secondary font-bold uppercase">Prime downtown location</span>
            </div>
            <div className="bg-white p-8 rounded-[15px] border border-[#eee] text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <i className="fas fa-clock text-4xl text-secondary mb-4"></i>
              <h4 className="font-primary text-xl mb-2 text-primary">Business Hours</h4>
              <p className="text-textSecondary mb-2">Mon-Sun: 24/7</p>
              <span className="text-xs text-secondary font-bold uppercase">Always available for you</span>
            </div>
          </section>

          <section className="bg-white rounded-[15px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] mb-16 animate-[fadeInUp_0.6s_ease-out]">
            <div className="text-center mb-8">
              <h2 className="font-primary text-3xl mb-2 text-primary">Send Us a Message</h2>
              <p className="text-textSecondary">Fill out the form below and our team will get back to you within 2 hours</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-textSecondary font-semibold mb-2"><i className="fas fa-user text-secondary mr-2"></i>Full Name</label>
                <input type="text" placeholder="Your full name" className="p-3 border rounded focus:outline-none focus:border-secondary" required />
              </div>
              <div className="flex flex-col">
                <label className="text-textSecondary font-semibold mb-2"><i className="fas fa-envelope text-secondary mr-2"></i>Email Address</label>
                <input type="email" placeholder="Your email address" className="p-3 border rounded focus:outline-none focus:border-secondary" required />
              </div>
              <div className="flex flex-col">
                <label className="text-textSecondary font-semibold mb-2"><i className="fas fa-phone text-secondary mr-2"></i>Phone Number</label>
                <input type="tel" placeholder="Your phone number" className="p-3 border rounded focus:outline-none focus:border-secondary" />
              </div>
              <div className="flex flex-col">
                <label className="text-textSecondary font-semibold mb-2"><i className="fas fa-tag text-secondary mr-2"></i>Subject</label>
                <select className="p-3 border rounded focus:outline-none focus:border-secondary bg-white text-textSecondary" required>
                  <option value="">Select a subject</option>
                  <option value="reservation">Room Reservation</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-textSecondary font-semibold mb-2"><i className="fas fa-comment text-secondary mr-2"></i>Message</label>
                <textarea rows="6" placeholder="Tell us how we can help you..." className="p-3 border rounded focus:outline-none focus:border-secondary" required></textarea>
              </div>
              <div className="md:col-span-2 text-center md:text-left mt-4">
                <button type="submit" className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-colors duration-300">
                  <i className="fas fa-paper-plane mr-2"></i> Send Message
                </button>
              </div>
            </form>
          </section>

        </div>
      </main>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Contact;
