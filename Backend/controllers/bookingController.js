const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = async (req, res) => {
  try {
    const { hotel: hotelId, checkIn, checkOut, adults, children } = req.body;

    if (!hotelId || !checkIn || !checkOut) {
      return res.status(400).json({ message: 'Please provide hotel ID, check-in, and check-out dates' });
    }

    // Check if hotel exists
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    const booking = await Booking.create({
      user: req.user.id,
      hotel: hotelId,
      checkIn,
      checkOut,
      adults: adults || 1,
      children: children || 0,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error creating booking' });
  }
};

// @desc    Get logged in user bookings
// @route   GET /api/bookings
// @access  Private
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('hotel');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error fetching bookings' });
  }
};

// @desc    Delete a booking
// @route   DELETE /api/bookings/:id
// @access  Private
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Make sure the logged in user matches the booking user
    if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'User not authorized to delete this booking' });
    }

    await Booking.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id, message: 'Booking removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error deleting booking' });
  }
};

module.exports = { createBooking, getMyBookings, deleteBooking };