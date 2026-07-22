import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-[4rem] text-white text-center" style={{ backgroundImage: 'linear-gradient(135deg, #1a1a2e, #bfa14a)' }}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div>
          <h2 className="font-primary text-[2.5rem] mb-4 text-white">Stay Updated with Exclusive Offers</h2>
          <p className="text-[1.1rem] mb-8 opacity-90">
            Subscribe to our newsletter and be the first to receive special promotions and luxury travel insights
          </p>
          <form className="flex flex-col sm:flex-row max-w-[500px] mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              className="flex-1 p-4 rounded border-none text-base text-primary focus:outline-none" 
            />
            <button 
              type="submit" 
              className="bg-secondary text-white px-6 py-4 font-semibold rounded hover:bg-accent hover:text-primary transition-all duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
