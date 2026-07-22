import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/signin");
        return;
      }

      try {
        const res = await fetch(
          "https://hotel-king.onrender.com/api/bookings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const data = await res.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [navigate]);

  const handleCancelBooking = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this reservation?"))
      return;

    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `https://hotel-king.onrender.com/api/bookings/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.ok) throw new Error("Failed to cancel booking");

      // Remove from UI
      setBookings(bookings.filter((b) => b._id !== id));
      alert("Reservation cancelled successfully.");
    } catch (err) {
      alert(err.message);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen font-sans flex flex-col">
      <div className="bg-primary relative z-50 h-[100px]">
        <Navbar />
      </div>

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-[2px] w-12 bg-secondary"></span>
            <h1 className="font-primary text-4xl text-primary tracking-wide">
              My Reservations
            </h1>
          </div>

          {loading ? (
            <div className="text-center font-primary text-2xl text-primary py-20 animate-pulse">
              Loading Your Itinerary...
            </div>
          ) : error ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
              {error}
            </div>
          ) : bookings.length === 0 ? (
            <div className="bg-white p-16 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[2px]">
              <i className="fas fa-suitcase-rolling text-6xl text-gray-200 mb-6 block"></i>
              <h2 className="font-primary text-3xl text-primary mb-4">
                No Active Reservations
              </h2>
              <p className="text-textSecondary mb-8">
                You haven't booked any luxury suites yet.
              </p>
              <Link
                to="/rooms"
                className="bg-secondary text-white px-8 py-3 font-bold tracking-widest text-sm uppercase hover:bg-primary transition-colors duration-300"
              >
                Explore Suites
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-[2px] overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* Image Header */}
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={`/images/${booking.hotel.image}`}
                      alt={booking.hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-primary/90 text-white backdrop-blur-sm px-3 py-1 text-xs tracking-widest font-bold uppercase rounded-[2px]">
                      Confirmed
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-primary text-2xl text-primary mb-1">
                      {booking.hotel.name}
                    </h3>
                    <p className="text-textSecondary text-sm mb-6">
                      <i className="fas fa-map-marker-alt text-secondary mr-2"></i>
                      {booking.hotel.location}
                    </p>

                    <div className="bg-[#faf9f8] p-4 border border-gray-100 mb-6 flex-grow">
                      <div className="mb-3 border-b border-gray-200 pb-3 flex justify-between items-center">
                        <span className="text-xs text-textSecondary uppercase tracking-widest font-bold">
                          Check-In
                        </span>
                        <span className="text-primary font-medium">
                          {formatDate(booking.checkIn)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-textSecondary uppercase tracking-widest font-bold">
                          Check-Out
                        </span>
                        <span className="text-primary font-medium">
                          {formatDate(booking.checkOut)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <button
                        onClick={() => handleCancelBooking(booking._id)}
                        className="w-full border border-red-200 text-red-500 hover:bg-red-50 py-3 text-xs tracking-widest font-bold uppercase transition-colors duration-300 rounded-[2px]"
                      >
                        Cancel Reservation
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyBookings;
