// server.js
import express from 'express';

import { connectDB } from './src/utils/index.js';
import { PORT, MONGO_URI } from './src/constants/index.js';

import authRoutes from './src/routes/authRoutes.js';

const app = express();

connectDB(MONGO_URI);

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
