const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

const {
  createBooking,
  getMyBookings,
  deleteBooking,
} = require('../controllers/bookingController');

router.route('/')
  .post(protect, createBooking)
  .get(protect, getMyBookings);

router.route('/:id')
  .delete(protect, deleteBooking);

module.exports = router;