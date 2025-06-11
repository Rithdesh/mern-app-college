const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

require("dotenv").config();

// Register a user (customer, business owner or both)
const register = async (req, res) => {
  try {
      
      const { name, email, password } = req.body;
      
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });
      
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const newUser = new User({
          name,
          email,
          password: hashedPassword,
          
        });
        
        await newUser.save();
     
        console.log("Registering user:", req.body);
    

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { 
        id: user._id,
        name: user.name,
        email: user.email
      },
      process.env.SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    console.log("Login successful",user.name);

    
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
    
  }
};
  



module.exports = {login,register};
