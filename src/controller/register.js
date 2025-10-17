// user controller

const User = require('../models/user');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ 
      message: 'Username and password are required' 
    });
  }

  if (password.length < 6) {
    return res.status(400).json({ 
      message: 'Password must be at least 6 characters' 
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { username } });
    
    if (existingUser) {
      return res.status(409).json({ 
        message: 'Username already exists' 
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = await User.create({
      username,
      password: hashedPassword
    });

    return res.status(201).json({ 
      message: 'User registered successfully',
      userId: newUser.id,
      username: newUser.username
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
};

module.exports = { registerUser };