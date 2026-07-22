require('dotenv').config();
const mongoose = require('mongoose');
const Hotel = require('./models/Hotel');

const unsplashImages = [
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542314831-c6a4d1409385?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598928506311-c55d4c35caa7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1568495248636-64328eb078bc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501876725168-00cb2aafe8d9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533633310920-cc9bf1e7f9b0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80"
];

const newRooms = [
  {
    name: "Golden Sands Resort Villa",
    location: "Andaman",
    price: 32000,
    image: unsplashImages[13],
    description: "Nestled on pristine white sands, this expansive 2-bedroom villa offers sweeping views of the turquoise ocean. Features a personal plunge pool, a private chef upon request, and an al-fresco dining patio perfect for tropical evenings.",
    amenities: ["Private Chef", "Plunge Pool", "Al Fresco Dining", "Oceanfront", "Luxury Bath", "Smart Home iPad"]
  },
  {
    name: "Valley Mist Chalet",
    location: "Shimla",
    price: 19500,
    image: unsplashImages[14],
    description: "A cozy and deeply atmospheric wooden chalet set amidst heavy pine forests. Highlights include an antique firewood stove, handcrafted hardwood furniture, and a cantilevered deck enveloped by morning mountain mist.",
    amenities: ["Firewood Stove", "Cantilevered Deck", "Pine Forest View", "Vintage Decor", "Coffee Station", "Heated Floors"]
  }
];

mongoose.connect(process.env.MONGO_URI, {})
  .then(async () => {
    console.log("Connected to MongoDB...");
    
    // Get all existing rooms
    const allRooms = await Hotel.find();
    
    // Update each existing room with a distinct unsplash image
    for (let i = 0; i < allRooms.length; i++) {
      if (i < 13) {
        allRooms[i].image = unsplashImages[i];
        await allRooms[i].save();
      }
    }

    // Insert the 2 new rooms
    await Hotel.insertMany(newRooms);
    
    console.log("Successfully updated images and seeded 2 new unique rooms!");
    process.exit();
  })
  .catch(err => {
    console.error("Error connecting or seeding", err);
    process.exit(1);
  });
