const Hotel = require('../models/Hotel');
const Booking = require('../models/Booking');

// @desc    Get all hotels
// @route   GET /api/hotels
// @access  Public
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error fetching hotels' });
  }
};

// @desc    Get single hotel
// @route   GET /api/hotels/:id
// @access  Public
const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error fetching hotel' });
  }
};

// @desc    Check Availability
// @route   POST /api/hotels/availability
// @access  Public
const checkAvailability = async (req, res) => {
  try {
    const { checkIn, checkOut } = req.body;

    if (!checkIn || !checkOut) {
      return res.status(400).json({ message: 'Please provide check-in and check-out dates' });
    }

    // Convert string to Dates
    const incomingCheckIn = new Date(checkIn);
    const incomingCheckOut = new Date(checkOut);

    // Find all bookings where dates overlap
    // Overlap condition: Booking checkIn < requested checkOut AND Booking checkOut > requested checkIn
    const conflictingBookings = await Booking.find({
      $and: [
        { checkIn: { $lt: incomingCheckOut } },
        { checkOut: { $gt: incomingCheckIn } }
      ]
    });

    // Extract hotel IDs that are booked
    const bookedHotelIds = conflictingBookings.map(b => b.hotel);

    // Find all hotels completely EXCEPT the ones that are booked
    const availableHotels = await Hotel.find({
      _id: { $nin: bookedHotelIds }
    });

    res.status(200).json(availableHotels);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error checking availability' });
  }
};

// @desc    Create a hotel
// @route   POST /api/hotels
// @access  Private/Admin
const createHotel = async (req, res) => {
  try {
    const { name, location, price, image } = req.body;

    if (!name || !location || !price || !image) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const hotel = await Hotel.create({
      name,
      location,
      price,
      image,
    });

    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error creating hotel' });
  }
};

// @desc    Update a hotel
// @route   PUT /api/hotels/:id
// @access  Private/Admin
const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error updating hotel' });
  }
};

// @desc    Delete a hotel
// @route   DELETE /api/hotels/:id
// @access  Private/Admin
const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id, message: 'Hotel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error deleting hotel' });
  }
};

module.exports = {
  getHotels,
  getHotelById,
  checkAvailability,
  createHotel,
  updateHotel,
  deleteHotel,
};