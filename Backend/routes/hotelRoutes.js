const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');

const {
  getHotels,
  getHotelById,
  checkAvailability,
  createHotel,
  updateHotel,
  deleteHotel,
} = require('../controllers/hotelController');

// Public routes
router.route('/').get(getHotels);
router.route('/availability').post(checkAvailability);
router.route('/:id').get(getHotelById);

// Protected Admin routes
router.route('/').post(protect, admin, createHotel);
router.route('/:id').put(protect, admin, updateHotel).delete(protect, admin, deleteHotel);

module.exports = router;