require('dotenv').config();
const mongoose = require('mongoose');
const Hotel = require('./models/Hotel');

mongoose.connect(process.env.MONGO_URI, {})
  .then(async () => {
    console.log("Connected to MongoDB...");

    const allRooms = await Hotel.find();

    // Assign room1.jpg through room15.jpg to the 15 rooms
    for (let i = 0; i < allRooms.length; i++) {
      allRooms[i].image = `room${i + 1}.jpg`;
      await allRooms[i].save();
    }

    console.log(`Updated ${allRooms.length} rooms with local image filenames!`);
    process.exit();
  })
  .catch(err => {
    console.error("Error connecting", err);
    process.exit(1);
  });
