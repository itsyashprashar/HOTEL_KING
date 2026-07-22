import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "\"Absolutely breathtaking! The Presidential Suite exceeded all expectations. The attention to detail and impeccable service made our anniversary unforgettable.\"",
      author: "Sarah Johnson",
      location: "New York, USA"
    },
    {
      text: "\"The spa treatments were divine, and the infinity pool with city views was magical. Perfect blend of luxury and comfort. Will definitely return!\"",
      author: "Michael Chen",
      location: "Singapore"
    },
    {
      text: "\"Exceptional service from check-in to check-out. The concierge went above and beyond to make our business trip seamless and enjoyable.\"",
      author: "Emma Rodriguez",
      location: "London, UK"
    }
  ];

  return (
    <section className="bg-background py-[4rem] relative z-[1]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-[3rem]">
          <h3 className="text-secondary font-primary text-[1.1rem] tracking-[2px] mb-4 uppercase">— Guest Experiences —</h3>
          <h2 className="font-primary text-[2.5rem] text-primary mb-4">What Our Guests Say</h2>
          <p className="text-textSecondary text-[1.1rem] max-w-[600px] mx-auto">
            Hear from our valued guests about their exceptional experiences at Luxury Hotel King
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] animate-[fadeInUp_0.6s_ease-out]"
            >
              <div className="text-secondary mb-4 flex gap-1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-textSecondary italic leading-[1.6] mb-6">
                {testimonial.text}
              </p>
              <div>
                <h5 className="text-textSecondary text-[1.1rem] mb-2">{testimonial.author}</h5>
                <p className="text-textSecondary text-[0.9rem]">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
