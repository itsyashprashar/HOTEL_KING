import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Room1 from '../assets/images/Room-1.jpg';
import Room2 from '../assets/images/Room-2.jpg';
import Room3 from '../assets/images/Room-3.jpg';

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://hotel-king.onrender.com/api/hotels")
      .then(res => res.json())
      .then(data => {
        const formatted = data.slice(0, 3).map((hotel) => {
          return {
            _id: hotel._id,
            image: hotel.image ? `/images/${hotel.image}` : `/images/room1.jpg`,
            title: hotel.name,
            price: `₹${hotel.price} / night`,
            description: hotel.location,
            features: hotel.amenities ? hotel.amenities.map(a => ({ icon: "fa-check", text: a })) : [
              { icon: "fa-bed", text: "Luxury Bed" },
              { icon: "fa-wifi", text: "Free WiFi" },
              { icon: "fa-tv", text: "Smart TV" }
            ]
          };
        });

        setRooms(formatted);
      })
      .catch(err => {
        console.log("Backend offline, using fallback data", err);
        setRooms([
          {
            _id: "1",
            image: `/images/room1.jpg`,
            title: "Presidential Suite",
            price: "₹25999 / night",
            description: "Mumbai",
            features: [
              { icon: "fa-bed", text: "Luxury Bed" },
              { icon: "fa-wifi", text: "Free WiFi" },
              { icon: "fa-tv", text: "Smart TV" }
            ]
          },
          {
            _id: "2",
            image: `/images/room2.jpg`,
            title: "Executive Suite",
            price: "₹18999 / night",
            description: "Delhi",
            features: [
              { icon: "fa-bed", text: "Luxury Bed" },
              { icon: "fa-wifi", text: "Free WiFi" },
              { icon: "fa-tv", text: "Smart TV" }
            ]
          },
          {
            _id: "3",
            image: `/images/room3.jpg`,
            title: "Hotel King",
            price: "₹15000 / night",
            description: "Jaipur",
            features: [
              { icon: "fa-bed", text: "Luxury Bed" },
              { icon: "fa-wifi", text: "Free WiFi" },
              { icon: "fa-tv", text: "Smart TV" }
            ]
          }
        ]);
      });
  }, []);

  // 🔥 BOOK FUNCTION
  const bookHotel = async (hotelId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Login first");
      return;
    }

    const res = await fetch("https://hotel-king.onrender.com/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        hotelId,
        date: "2026-04-10"
      })
    });

    const data = await res.json();
    console.log(data);

    alert("Booking Done");
  };

  return (
    <section className="bg-white py-[4rem]">
      <div className="container mx-auto px-4 max-w-[1200px]">

        {/* Heading */}
        <div className="text-center mb-[3rem]">
          <h3 className="text-secondary font-primary text-[1.1rem] tracking-[2px] mb-4 uppercase">
            — Luxury Accommodations —
          </h3>
          <h2 className="font-primary text-[2.5rem] text-primary mb-4">
            Our Signature Suites
          </h2>
          <p className="text-textSecondary text-[1.1rem] max-w-[600px] mx-auto">
            Indulge in our meticulously designed rooms and suites
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[3rem]">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] group hover:-translate-y-[5px] transition duration-300"
            >

              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <button
                    onClick={() => navigate(`/hotel/${room._id}`)}
                    className="bg-white text-primary px-6 py-3 rounded font-semibold hover:bg-secondary hover:text-white transition"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-primary text-[1.3rem] mb-2">{room.title}</h4>
                <p className="text-secondary font-semibold text-[1.2rem] mb-4">{room.price}</p>
                <p className="text-textSecondary mb-4">{room.description}</p>

                <div className="flex flex-wrap gap-4">
                  {room.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center gap-2 text-textSecondary text-[0.9rem]">
                      <i className={`fas ${feature.icon}`}></i> {feature.text}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Link
            to="/rooms"
            className="inline-block bg-secondary text-white px-8 py-4 rounded font-semibold hover:bg-accent transition"
          >
            VIEW ALL ROOMS
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedRooms;