import React from 'react';
import { Link } from 'react-router-dom';

const SpecialOffersPromo = () => {
  return (
    <section className="py-[4rem] bg-[linear-gradient(135deg,var(--tw-colors-secondary),var(--tw-colors-accent))] text-white text-center" style={{ backgroundImage: 'linear-gradient(135deg, #bfa14a, #f0c674)' }}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-primary text-[2.5rem] mb-4 text-white">Exclusive Special Offers</h2>
          <p className="text-[1.1rem] mb-8 opacity-90">
            Don't miss out on our limited-time deals and packages designed for your luxury experience.
          </p>
          <Link to="/rooms" className="inline-block bg-white text-primary px-8 py-4 rounded font-semibold transition-colors duration-300 hover:bg-primary hover:text-white">
            VIEW SPECIAL OFFERS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersPromo;
