const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Booking must belong to a user'],
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
      required: [true, 'Booking must belong to a hotel'],
    },
    checkIn: {
      type: Date,
      required: [true, 'Please provide a check-in date'],
    },
    checkOut: {
      type: Date,
      required: [true, 'Please provide a check-out date'],
    },
    adults: {
      type: Number,
      required: [true, 'Please specify the number of adults'],
      default: 1,
    },
    children: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Booking', bookingSchema);