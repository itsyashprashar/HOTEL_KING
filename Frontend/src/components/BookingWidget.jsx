import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingWidget = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: '1',
    children: '0'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select both check-in and check-out dates");
      return;
    }
    
    // Navigate to /rooms and pass the formData in the location state
    navigate('/rooms', { state: formData });
  };

  return (
    <div className="absolute -bottom-[80px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] bg-white rounded-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-8 z-[100]">
      <div className="text-center animate-[fadeInUp_0.6s_ease-out]">
        <h3 className="text-primary text-2xl font-primary mb-8 uppercase">Reserve Your Luxury Stay</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end text-left">
          <div className="flex flex-col">
            <label htmlFor="checkIn" className="text-primary font-semibold mb-2 flex items-center gap-2">
              <i className="fas fa-calendar-alt text-secondary"></i> CHECK IN
            </label>
            <input 
              type="date" 
              id="checkIn" 
              name="checkIn" 
              value={formData.checkIn}
              onChange={handleChange}
              required 
              className="w-full p-3 border-2 border-[#e0e0e0] rounded text-base transition-colors duration-300 focus:outline-none focus:border-secondary text-primary" 
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="checkOut" className="text-primary font-semibold mb-2 flex items-center gap-2">
              <i className="fas fa-calendar-alt text-secondary"></i> CHECK OUT
            </label>
            <input 
              type="date" 
              id="checkOut" 
              name="checkOut" 
              value={formData.checkOut}
              onChange={handleChange}
              required 
              className="w-full p-3 border-2 border-[#e0e0e0] rounded text-base transition-colors duration-300 focus:outline-none focus:border-secondary text-primary" 
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="adults" className="text-primary font-semibold mb-2 flex items-center gap-2">
              <i className="fas fa-user text-secondary"></i> ADULTS
            </label>
            <select 
              id="adults" 
              name="adults" 
              value={formData.adults}
              onChange={handleChange}
              className="w-full p-3 border-2 border-[#e0e0e0] rounded text-base transition-colors duration-300 focus:outline-none focus:border-secondary text-primary bg-white"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="children" className="text-primary font-semibold mb-2 flex items-center gap-2">
              <i className="fas fa-child text-secondary"></i> CHILDREN
            </label>
            <select 
              id="children" 
              name="children" 
              value={formData.children}
              onChange={handleChange}
              className="w-full p-3 border-2 border-[#e0e0e0] rounded text-base transition-colors duration-300 focus:outline-none focus:border-secondary text-primary bg-white"
            >
              <option value="0">No Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-primary text-white p-[14px] font-semibold text-[1.1rem] rounded transition-transform duration-300 hover:bg-secondary hover:-translate-y-[2px] flex items-center justify-center gap-2">
            <i className="fas fa-search"></i> CHECK AVAILABILITY
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingWidget;
