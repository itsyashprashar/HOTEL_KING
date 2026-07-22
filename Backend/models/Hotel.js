const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the hotel name'],
    },
    location: {
      type: String,
      required: [true, 'Please provide the hotel location'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide the price per night'],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      default: 'Luxurious accommodation with premium amenities, offering breathtaking views and unparalleled comfort for an unforgettable stay.'
    },
    amenities: {
      type: [String],
      default: ['Luxury Bed', 'Free WiFi', 'Smart TV']
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Hotel', hotelSchema);