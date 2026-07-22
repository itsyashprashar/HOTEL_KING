require('dotenv').config();
const mongoose = require('mongoose');
const Hotel = require('./models/Hotel');

const newRooms = [
  {
    name: "Ocean View Villa",
    location: "Goa",
    price: 35000,
    image: "room-2.jpg",
    description: "Step into paradise with our Ocean View Villa. Wake up to the sound of crashing waves and enjoy a private stretch of beach. This expansive suite features floor-to-ceiling windows, a private infinity plunge pool, and bespoke teak wooden furnishings that capture the essence of tropical luxury.",
    amenities: ["Private Beach Access", "Infinity Plunge Pool", "24/7 Butler Service", "Ocean View", "Smart Home iPad", "Premium Mini Bar"]
  },
  {
    name: "Royal Maharaja Suite",
    location: "Udaipur",
    price: 55000,
    image: "room-1.jpg",
    description: "Live like royalty in the Maharaja Suite, inspired by the grand palaces of Rajasthan. Boasting 1,200 sq.ft. of opulent living space, this suite features intricate marble carvings, antique art pieces, a majestic four-poster king bed, and a private dining area with panoramic views of the lake.",
    amenities: ["Four-Poster King Bed", "Private Dining Room", "Marble Bathtub", "Lake View", "Luxury Spa Products", "Chauffeur Service"]
  },
  {
    name: "Sky Gazing Penthouse",
    location: "Mumbai",
    price: 45000,
    image: "room-3.jpg",
    description: "Perched on the 45th floor, the Sky Gazing Penthouse offers a breathtaking 360-degree panorama of the city skyline. Designed for the modern elite, this suite features a glass-paneled ceiling for stargazing, a fully soundproofed media room, and a wrap-around terrace.",
    amenities: ["Glass Ceiling", "Wrap-around Terrace", "Home Theater", "City Skyline View", "Walk-in Wardrobe", "Jacuzzi"]
  },
  {
    name: "Himalayan Retreat Suite",
    location: "Manali",
    price: 22000,
    image: "room-2.jpg",
    description: "Escape the noise and embrace the serenity of the mountains. This rustic yet ultra-luxurious suite features a stone fireplace, heated wooden floors, and a massive bay window overlooking the snow-capped peaks. Perfect for a cozy, romantic getaway.",
    amenities: ["Stone Fireplace", "Heated Floors", "Mountain View", "Private Balcony", "Premium Coffee Machine", "Plush Bathrobes"]
  },
  {
    name: "Tropical Canopy Room",
    location: "Kerala",
    price: 18000,
    image: "room-1.jpg",
    description: "Nestled high among the rich green canopy of Kerala's backwaters, this eco-luxury room blends nature with comfort. Feel the breeze from your suspended outdoor deck, sleep on organic linen, and enjoy an open-air rain shower under the stars.",
    amenities: ["Open-air Rain Shower", "Hammock Deck", "Nature View", "Organic Linens", "Smart TV", "Free WiFi"]
  },
  {
    name: "Silicon Valley Executive",
    location: "Bengaluru",
    price: 16500,
    image: "room-3.jpg",
    description: "Designed strictly for the high-powered executive. This seamlessly integrated smart-suite features voice-controlled lighting, an ergonomic herman-miller workstation, lightning-fast gigabit internet, and an automated espresso bar.",
    amenities: ["Gigabit WiFi", "Ergonomic Workstation", "Voice Control", "Espresso Bar", "Luxury Bed", "City View"]
  },
  {
    name: "Heritage Fort Chamber",
    location: "Jodhpur",
    price: 28000,
    image: "room-1.jpg",
    description: "Transport yourself back in time. Housed in a meticulously restored 16th-century section of the fort, this chamber features original frescoes, heavy rosewood doors, and luxurious modern amenities seamlessly woven into historical architecture.",
    amenities: ["Historic Architecture", "Rosewood Furnishings", "Luxury Bed", "Mini Bar", "Free WiFi", "Smart TV"]
  },
  {
    name: "Desert Oasis Tent",
    location: "Jaisalmer",
    price: 24000,
    image: "room-2.jpg",
    description: "Experience the magic of the Thar desert in our ultra-luxury glamping tents. Each tent sits on a raised wooden platform and is fully air-conditioned, featuring silk draping, a private campfire pit, and an outdoor soaking tub.",
    amenities: ["Private Campfire", "Outdoor Soaking Tub", "Air Conditioning", "Desert View", "Stargazing Kit", "Luxury Bed"]
  },
  {
    name: "Urban Oasis Loft",
    location: "Pune",
    price: 14000,
    image: "room-3.jpg",
    description: "A trendy, bi-level loft space in the heart of the city. Featuring exposed brickwork, industrial-chic lighting, a floating staircase, and a floor-to-ceiling glass wall that floods the space with natural light.",
    amenities: ["Bi-level Loft", "Industrial Chic Decor", "Gourmet Kitchenette", "Smart TV", "Free WiFi", "Luxury Bed"]
  },
  {
    name: "Zen Garden Suite",
    location: "Pune",
    price: 21000,
    image: "room-1.jpg",
    description: "Focus on wellness and tranquility in the Zen Garden Suite. This room opens directly into a private, traditional Japanese rock garden. Includes a dedicated meditation space, aromatherapy diffusers, and an oversized deep-soaking wooden tub.",
    amenities: ["Private Rock Garden", "Wooden Soaking Tub", "Aromatherapy", "Meditation Space", "Air Purifier", "Free WiFi"]
  }
];

mongoose.connect(process.env.MONGO_URI, {})
  .then(async () => {
    console.log("Connected to MongoDB...");
    // Clear old sparse backend data to make it totally fresh and rich? 
    // Or just append. We will just append them so we don't delete old data.
    
    // Update existing rooms to also have descriptions if they are missing
    await Hotel.updateMany(
      { description: { $exists: false } },
      { $set: { 
        description: 'Experience the epitome of luxury and comfort in our meticulously designed rooms and suites. Offering breathtaking views and unparalleled comfort for an unforgettable stay.',
        amenities: ['Luxury Bed', 'Free WiFi', 'Smart TV']
      }}
    );

    // Insert new rooms
    await Hotel.insertMany(newRooms);
    
    console.log("Successfully seeded 10 luxury rooms!");
    process.exit();
  })
  .catch(err => {
    console.error("Error connecting or seeding", err);
    process.exit(1);
  });
