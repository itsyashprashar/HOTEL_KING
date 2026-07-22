require('dotenv').config();
const mongoose = require('mongoose');
const Hotel = require('./models/Hotel');

mongoose.connect(process.env.MONGO_URI, {})
  .then(async () => {
    console.log("Connected to MongoDB...");
    
    // Update the broken images
    await Hotel.updateOne(
      { name: "Ocean View Villa" },
      { $set: { image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80" } }
    );

    await Hotel.updateOne(
      { name: "Heritage Fort Chamber" },
      { $set: { image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80" } }
    );

    await Hotel.updateOne(
      { name: "Zen Garden Suite" },
      { $set: { image: "https://images.unsplash.com/photo-1551882547-ff40c0d5b5fa?auto=format&fit=crop&w=800&q=80" } }
    );
    
    console.log("Fixed the broken images!");
    process.exit();
  })
  .catch(err => {
    console.error("Error connecting", err);
    process.exit(1);
  });
