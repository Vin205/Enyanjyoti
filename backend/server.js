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
const contactUsRoute = require("./src/routes/contact.js");
app.use("/api/reach", contactUsRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
