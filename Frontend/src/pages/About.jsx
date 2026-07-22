import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const About = () => {
  const team = [
    {
      img: "https://hotel-king-nu.vercel.app/Photos/Staff-1.jpg",
      name: "Ms. Olivia Carter",
      role: "Front Desk Manager",
      desc: "Ensuring seamless guest experiences with 8+ years in hospitality management",
      phone: "+1 (555) 123-4567",
      email: "olivia@luxuryhotelking.com"
    },
    {
      img: "https://hotel-king-nu.vercel.app/Photos/Staff-2.jpg",
      name: "Mr. John Smith",
      role: "Housekeeping Supervisor",
      desc: "Maintaining impeccable standards of cleanliness and comfort for our guests",
      phone: "+1 (555) 234-5678",
      email: "john@luxuryhotelking.com"
    },
    {
      img: "https://hotel-king-nu.vercel.app/Photos/staff-3.jpg",
      name: "Ms. Emma Johnson",
      role: "Executive Chef",
      desc: "Crafting exquisite culinary experiences with international expertise",
      phone: "+1 (555) 345-6789",
      email: "emma@luxuryhotelking.com"
    },
    {
      img: "https://hotel-king-nu.vercel.app/Photos/Staff-4.1.jpg",
      name: "Mr. Michael Brown",
      role: "Guest Relations Manager",
      desc: "Ensuring exceptional guest satisfaction and personalized experiences",
      phone: "+1 (555) 456-7890",
      email: "michael@luxuryhotelking.com"
    },
    {
      img: "https://hotel-king-nu.vercel.app/Photos/Staff-5.jpg",
      name: "Ms. Sophia Lee",
      role: "Event Coordinator",
      desc: "Planning and executing memorable events with attention to detail",
      phone: "+1 (555) 567-8901",
      email: "sophia@luxuryhotelking.com"
    },
    {
      img: "https://hotel-king-nu.vercel.app/Photos/Staff-6.jpg",
      name: "Mr. David Wilson",
      role: "Marketing Director",
      desc: "Driving brand growth and innovative marketing strategies",
      phone: "+1 (555) 678-9012",
      email: "david@luxuryhotelking.com"
    }
  ];

  return (
    <>
      <header className="bg-primary pt-[150px] pb-16 text-center text-white relative">
        <Navbar />
        <h1 className="font-primary text-5xl mb-4 text-white">About Us</h1>
        <nav className="text-secondary">
          <Link to="/" className="text-white hover:text-secondary">Home</Link> &gt; <span>About</span>
        </nav>
      </header>

      <main className="container mx-auto px-4 max-w-[1200px] py-16">
        <section className="text-center max-w-[800px] mx-auto mb-16 animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="font-primary text-4xl mb-6 text-primary">Our Story of Luxury and Excellence</h2>
          <p className="text-textSecondary text-lg mb-4">
            Founded in 2010, Luxury Hotel King has been redefining luxury hospitality with our commitment to exceptional
            service, world-class amenities, and unforgettable experiences.
          </p>
          <p className="text-textSecondary text-lg">
            Our journey began with a simple vision: to create a sanctuary where every guest feels valued, pampered, and inspired.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-white p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <i className="fas fa-bullseye text-4xl text-secondary mb-4"></i>
            <h3 className="font-primary text-2xl mb-4 text-primary">Our Mission</h3>
            <p className="text-textSecondary">
              To provide unparalleled hospitality experiences through personalized service, luxurious accommodations, and attention to every detail, ensuring our guests create lasting memories.
            </p>
          </div>
          <div className="bg-white p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <i className="fas fa-eye text-4xl text-secondary mb-4"></i>
            <h3 className="font-primary text-2xl mb-4 text-primary">Our Vision</h3>
            <p className="text-textSecondary">
              To be the world's most admired luxury hotel brand, setting new standards in hospitality and creating exceptional value for our guests, employees, and communities.
            </p>
          </div>
          <div className="bg-white p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <i className="fas fa-star text-4xl text-secondary mb-4"></i>
            <h3 className="font-primary text-2xl mb-4 text-primary">Our Values</h3>
            <p className="text-textSecondary">
              Excellence, Integrity, Innovation, and Compassion guide every decision we make and every interaction we have.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-primary text-4xl mb-4 text-primary">Meet Our Professional Team</h2>
            <p className="text-textSecondary text-lg">Dedicated to providing exceptional service and creating memorable experiences</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <article key={i} className="bg-white rounded-[15px] p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2">
                <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden mb-4 border-4 border-secondary">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-primary text-xl text-primary">{member.name}</h3>
                <p className="text-secondary font-semibold mb-2">{member.role}</p>
                <p className="text-textSecondary text-sm mb-4 leading-relaxed">{member.desc}</p>
                <div className="border-t border-[#eee] pt-4 flex flex-col gap-2 text-sm text-textSecondary">
                  <p><i className="fas fa-phone text-secondary"></i> {member.phone}</p>
                  <p><i className="fas fa-envelope text-secondary"></i> {member.email}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
