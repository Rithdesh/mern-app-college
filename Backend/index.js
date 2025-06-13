const express = require('express'); 
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserRoutes = require('./Routes/UserRoutes');
const cors = require('cors');
dotenv.config(); 

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
}));

app.use(express.json()); 

// Test route
app.get('/', (req, res) => {
    res.send("Hello world");
});

// MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas connected successfully");
    console.log("📂 Using DB:", mongoose.connection.name);

    app.use('/User', UserRoutes);
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
