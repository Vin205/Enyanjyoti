import dotenv from 'dotenv';

// Load environment variables from the .env file
const result = dotenv.config();

// Optional: Handle dotenv load failure
if (result.error) {
  throw new Error(
    'Failed to load .env file, please make sure that you have a .env file in the backend directory'
  );
}

// Set PORT with a default fallback of 3000
const PORT = process.env.PORT || 8081;

// Check for the presence of MONGO_URI
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}

// Export PORT and MONGO_URI
export { PORT, MONGO_URI };
