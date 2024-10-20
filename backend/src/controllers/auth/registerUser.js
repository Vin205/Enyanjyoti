import User from '../../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register a new user
export const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    // Save the user and handle any potential errors
    await newUser.save().catch((err) => {
      return res.status(500).json({
        message: 'Error saving user',
        error: err.message || err,
      });
    });

    // Create a JWT token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(201).json({
      message: 'User registered successfully!',
      token,
      user: {
        id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error registering user',
      error: error.message || error,
    });
  }
};
