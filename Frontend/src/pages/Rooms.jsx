import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Room1 from "../assets/images/Room-1.jpg";
import Room2 from "../assets/images/Room-2.jpg";
import Room3 from "../assets/images/Room-3.jpg";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // If navigated from BookingWidget, extract parameters
  const searchState = location.state;

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        let endpoint = "https://hotel-king-backend.onrender.com/api/hotels";
        let config = {};

        // If we have date constraints from the widget, fetch availability
        if (searchState && searchState.checkIn && searchState.checkOut) {
          endpoint =
            "https://hotel-king-backend.onrender.com/api/hotels/availability";
          config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              checkIn: searchState.checkIn,
              checkOut: searchState.checkOut,
            }),
          };
        }

        const res = await fetch(endpoint, config);
        const data = await res.json();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setRooms([
          {
            _id: "1",
            image: `/images/room1.jpg`,
            name: "Presidential Suite",
            price: 25999,
            description:
              "Mumbai - Luxurious accommodation with premium amenities, offering breathtaking views and unparalleled comfort for an unforgettable stay.",
            amenities: ["Luxury Bed", "Free WiFi", "Smart TV"],
          },
          {
            _id: "2",
            image: `/images/room2.jpg`,
            name: "Executive Suite",
            price: 18999,
            description:
              "Delhi - Experience the ultimate luxury and comfort in this beautifully appointed space.",
            amenities: ["Luxury Bed", "Free WiFi", "Smart TV"],
          },
          {
            _id: "3",
            image: `/images/room3.jpg`,
            name: "Hotel King",
            price: 15000,
            description:
              "Jaipur - Perfect for both leisure and business travelers seeking an unforgettable stay.",
            amenities: ["Luxury Bed", "Free WiFi", "Smart TV"],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, [searchState]);

  return (
    <>
      <header className="bg-[linear-gradient(rgba(26,26,46,0.8),rgba(26,26,46,0.8)),url('https://hotel-king-nu.vercel.app/images/hero-bg.jpg')] bg-cover bg-center text-center text-white pt-[150px] pb-[80px] relative">
        <Navbar />
        <h1 className="font-primary text-[3rem] md:text-[4rem] text-secondary mb-4 animate-[fadeInUp_0.6s_ease-out]">
          Our Rooms
        </h1>
        <div className="flex justify-center gap-4 text-sm font-semibold tracking-[1px] animate-[fadeInUp_0.6s_ease-out] delay-200">
          <Link
            to="/"
            className="text-white decoration-none hover:text-secondary transition-colors"
          >
            Home
          </Link>
          <span className="text-secondary">&gt;</span>
          <span>Rooms</span>
        </div>
      </header>

      <main className="bg-background py-[5rem]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          {searchState && (
            <div className="mb-10 bg-white p-6 rounded-lg shadow border-l-4 border-secondary">
              <h2 className="text-xl font-primary text-primary mb-2">
                Showing available rooms for:
              </h2>
              <p className="text-textSecondary">
                <strong>Check-In:</strong> {searchState.checkIn} &nbsp;|&nbsp;
                <strong>Check-Out:</strong> {searchState.checkOut} &nbsp;|&nbsp;
                <strong>Guests:</strong>{" "}
                {parseInt(searchState.adults) + parseInt(searchState.children)}
              </p>
            </div>
          )}

          {loading ? (
            <div className="text-center font-primary text-2xl text-primary py-20">
              Searching best suites...
            </div>
          ) : rooms.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl text-primary font-primary">
                No rooms available for these dates!
              </h3>
              <p className="text-textSecondary mt-2">
                Please try adjusting your search dates.
              </p>
              <button
                onClick={() => navigate("/")}
                className="mt-6 bg-secondary text-white px-6 py-2 rounded"
              >
                Go Back
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room, index) => (
                <div
                  key={room._id || index}
                  className="flex flex-col h-full bg-white rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px] group"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={
                        room.image
                          ? `/images/${room.image}`
                          : `/images/room1.jpg`
                      }
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-primary text-[1.4rem] mb-2 text-primary">
                      {room.name}
                    </h3>
                    <p className="text-secondary font-semibold text-[1.2rem] mb-4">
                      ₹{room.price} / night
                    </p>
                    <p className="text-textSecondary mb-6 leading-relaxed text-[0.95rem]">
                      {room.description
                        ? room.description.substring(0, 100) + "..."
                        : "Luxurious accommodation with premium amenities and breathtaking views."}
                    </p>

                    <div className="flex flex-wrap gap-4 text-[0.9rem] text-textSecondary mb-6">
                      {room.amenities &&
                        room.amenities.slice(0, 2).map((a, i) => (
                          <span key={i}>
                            <i className="fas fa-check text-secondary mr-1"></i>{" "}
                            {a}
                          </span>
                        ))}
                    </div>

                    <button
                      onClick={() => navigate(`/hotel/${room._id}`)}
                      className="mt-auto w-full bg-primary text-white py-3 rounded font-semibold hover:bg-secondary transition-colors duration-300"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Rooms;
