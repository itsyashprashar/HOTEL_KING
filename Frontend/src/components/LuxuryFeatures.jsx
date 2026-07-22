import React from 'react';

const LuxuryFeatures = () => {
  const features = [
    {
      icon: "fa-concierge-bell",
      title: "24/7 Concierge Service",
      description: "Personalized assistance for all your needs, available round the clock"
    },
    {
      icon: "fa-spa",
      title: "Luxury Spa & Wellness",
      description: "Rejuvenate with our world-class spa treatments and wellness programs"
    },
    {
      icon: "fa-utensils",
      title: "Gourmet Dining",
      description: "Exquisite culinary experiences with our Michelin-starred chefs"
    },
    {
      icon: "fa-swimming-pool",
      title: "Infinity Pool",
      description: "Stunning infinity pool with panoramic views of the city skyline"
    },
    {
      icon: "fa-dumbbell",
      title: "Fitness Center",
      description: "State-of-the-art fitness equipment with personal training available"
    },
    {
      icon: "fa-wifi",
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the property"
    }
  ];

  return (
    <section className="bg-background pt-[8rem] pb-[4rem]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-[3rem]">
          <h3 className="text-secondary font-primary text-[1.1rem] tracking-[2px] mb-4 uppercase">— Premium Amenities —</h3>
          <h2 className="font-primary text-[2.5rem] text-primary mb-4">Experience Unmatched Luxury</h2>
          <p className="text-textSecondary text-[1.1rem] max-w-[600px] mx-auto">
            Discover the exceptional amenities that make your stay at Luxury Hotel King truly unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[15px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] animate-[fadeInUp_0.6s_ease-out]"
            >
              <div className="text-[3rem] text-secondary mb-4 flex justify-center">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h4 className="text-primary text-[1.3rem] mb-4">{feature.title}</h4>
              <p className="text-textSecondary leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryFeatures;
