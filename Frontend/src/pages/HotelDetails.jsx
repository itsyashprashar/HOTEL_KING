import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Room1 from "../assets/images/Room-1.jpg";
import Room2 from "../assets/images/Room-2.jpg";
import Room3 from "../assets/images/Room-3.jpg";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await fetch(
          `https://hotel-king-backend.onrender.com/api/hotels/${id}`,
        );
        if (!res.ok) throw new Error("Failed to fetch hotel details");
        const data = await res.json();
        setHotel(data);
      } catch (err) {
        console.error("Backend offline, using fallback data for details", err);
        const fallbacks = {
          1: {
            _id: "1",
            image: `/images/room1.jpg`,
            name: "Presidential Suite",
            price: 25999,
            description:
              "Mumbai - Luxurious accommodation with premium amenities and breathtaking views.",
            location: "Mumbai",
            amenities: [
              "Luxury Bed",
              "Free WiFi",
              "Smart TV",
              "Mini Bar",
              "Room Service",
            ],
          },
          2: {
            _id: "2",
            image: `/images/room2.jpg`,
            name: "Executive Suite",
            price: 18999,
            description:
              "Delhi - Experience the ultimate luxury and comfort in this beautifully appointed space.",
            location: "Delhi",
            amenities: ["Luxury Bed", "Free WiFi", "Smart TV", "Mini Bar"],
          },
          3: {
            _id: "3",
            image: `/images/room3.jpg`,
            name: "Hotel King",
            price: 15000,
            description:
              "Jaipur - Perfect for both leisure and business travelers seeking an unforgettable stay.",
            location: "Jaipur",
            amenities: ["Luxury Bed", "Free WiFi", "Smart TV"],
          },
        };
        const hotelData = fallbacks[id] || fallbacks["1"];
        setHotel(hotelData);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [id]);

  const handleBooking = async () => {
    if (!checkInDate || !checkOutDate) {
      alert("Please select both Check-In and Check-Out dates first.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Login first to book a hotel!");
      navigate("/signin");
      return;
    }

    try {
      const res = await fetch(
        "https://hotel-king-backend.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            hotel: hotel._id,
            checkIn: checkInDate,
            checkOut: checkOutDate,
            adults: 1,
            children: 0,
          }),
        },
      );

      if (!res.ok) throw new Error("Booking failed");
      const data = await res.json();
      setBookingMessage("Booking successful! Your luxury experience awaits.");

      setTimeout(() => setBookingMessage(""), 5000);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-primary text-primary">
        Loading Luxury Details...
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-primary text-red-500">
        {error}
      </div>
    );
  if (!hotel) return null;

  return (
    <div className="bg-[#fcfbf9] min-h-screen font-sans">
      <div className="bg-primary relative z-50">
        <Navbar />
      </div>

      {/* Hero Image Section with Subtle Parallax feel */}
      <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden group">
        <img
          src={hotel.image ? `/images/${hotel.image}` : `/images/room1.jpg`}
          alt={hotel.name}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0a0a0a]/90"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white pb-24 px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-secondary opacity-70"></span>
            <p className="text-secondary text-sm font-bold tracking-[8px] uppercase">
              The Signature Collection
            </p>
            <span className="h-[1px] w-12 bg-secondary opacity-70"></span>
          </div>
          <h1 className="font-primary text-6xl md:text-8xl mb-6 tracking-wide drop-shadow-xl font-light text-white opacity-95">
            {hotel.name}
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[5px] uppercase opacity-80">
            <i className="fas fa-map-marker-alt text-secondary mr-3"></i>
            {hotel.location}
          </p>
        </div>
      </section>

      <main className="relative z-10 -mt-16 pb-24">
        <div className="container mx-auto px-4 max-w-[1300px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column - Details */}
            <div className="lg:col-span-8">
              <div className="bg-white p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div className="mb-16 border-b border-gray-100 pb-12">
                  <h2 className="font-primary text-4xl text-primary tracking-wide text-center mb-8">
                    The Experience
                  </h2>
                  <p className="text-textSecondary leading-[2.4] text-lg font-light text-center px-4 md:px-12">
                    {hotel.description ||
                      "Immerse yourself in unparalleled luxury. This meticulously designed space offers an inspiring blend of classical elegance and contemporary sophistication, ensuring an unforgettable retreat for the discerning traveler."}
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="font-primary text-3xl text-primary tracking-wide text-center mb-12">
                    Privileges & Amenities
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotel.amenities && hotel.amenities.length > 0 ? (
                      hotel.amenities.map((amenity, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center text-center p-6 border border-gray-50 bg-[#faf9f8] hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                        >
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-secondary mb-4">
                            <i className="fas fa-gem text-lg"></i>
                          </div>
                          <span className="text-primary font-medium tracking-wider text-sm uppercase">
                            {amenity}
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="text-textSecondary italic text-center w-full block col-span-3">
                        Contact your dedicated concierge for specific amenities.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Widget */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 backdrop-blur-xl bg-primary/95 text-white p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white/10">
                <div className="text-center mb-10 border-b border-white/10 pb-8">
                  <p className="text-[10px] text-white/50 uppercase tracking-[4px] font-bold mb-4">
                    Reserve This Suite
                  </p>
                  <p className="font-primary text-5xl text-secondary mb-2">
                    ₹{hotel.price.toLocaleString("en-IN")}
                  </p>
                  <p className="text-white/60 font-medium tracking-widest text-xs uppercase">
                    Per Night
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="bg-white/5 border border-white/10 p-4 transition-colors hover:bg-white/10">
                    <label className="text-[10px] text-secondary uppercase font-bold tracking-[3px] block mb-2">
                      Check-In
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      required
                      className="w-full bg-transparent text-white font-light focus:outline-none placeholder-white/30"
                    />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 transition-colors hover:bg-white/10">
                    <label className="text-[10px] text-secondary uppercase font-bold tracking-[3px] block mb-2">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      required
                      className="w-full bg-transparent text-white font-light focus:outline-none placeholder-white/30"
                    />
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-secondary to-[#d4b95f] text-primary py-5 font-bold tracking-[4px] text-sm uppercase hover:shadow-[0_0_20px_rgba(191,161,74,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Confirm Reservation
                </button>

                {bookingMessage && (
                  <div
                    className="mt-8 bg-green-500/10 border-l-2 border-green-400 p-4 animate-[fadeInUp_0.4s_ease-out]"
                    role="alert"
                  >
                    <p className="font-primary text-green-400 text-lg tracking-wide uppercase">
                      Confirmed
                    </p>
                    <p className="text-white/80 font-light text-sm mt-2">
                      {bookingMessage}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-4 border border-primary/20 text-primary px-10 py-4 uppercase tracking-[3px] text-xs font-bold hover:bg-primary hover:text-white transition-all duration-500"
            >
              <i className="fas fa-arrow-left"></i> Return to Portfolio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetails;
