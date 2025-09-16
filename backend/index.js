// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const authMiddleware = require('./middleware/authMiddleware');

// INITIALIZE APP & MIDDLEWARES
const app = express();
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err.message));

// --- API ROUTES ---

// HIGHLIGHT: ADD THIS NEW PROTECTED ROUTE
app.get('/api/user/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// SIGN-UP ROUTE
app.post('/api/auth/signup', async (req, res) => {
  // ... your full signup code ...
});

// LOGIN ROUTE
app.post('/api/auth/login', async (req, res) => {
  // ... your full login code ...
});

// START THE SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});