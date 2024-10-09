// server.js
import express from 'express';
import userRoutes from './routes/userRoutes.js';

import { connectDB } from "./utils/index.js"

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
