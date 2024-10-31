// db.js
import mongoose from 'mongoose';

/**
 * Connect to MongoDB
 * @param {string} uri - MongoDB connection URI
 */
const connectDB = async (uri) => {
  // Check if the URI is provided
  if (!uri) {
    console.error('MongoDB URI is not provided.');
    process.exit(1); // Exit the process with failure
  }

  // Validate the URI format (basic validation)
  const uriPattern =
    /^(mongodb(?:\+srv)?:\/\/)([a-zA-Z0-9._-]+:[a-zA-Z0-9._-]+@)?([a-zA-Z0-9.-]+)(:[0-9]{1,5})?(\/[a-zA-Z0-9._-]*)?$/;
  if (!uriPattern.test(uri)) {
    console.error('Invalid MongoDB URI format:', uri);
    process.exit(1); // Exit the process with failure
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
