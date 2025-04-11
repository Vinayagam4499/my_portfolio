// Import necessary packages using ES6 syntax
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';
dotenv.config();

// Initialize Express app
const app = express();

// Use built-in middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS (adjust the origins in production)
app.use(cors());

// Get MongoDB Atlas connection string from environment variable
const dbURI = process.env.MONGO_URI;

// Check for required environment variable
if (!dbURI) {
  console.error("Missing MONGO_URI in environment variables.");
  process.exit(1);
}

// Connect to MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

// Create an endpoint to store the contact data
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ success: false, message: 'Error sending message', error: error.message });
  }
});

// Serve React app in production (if applicable)
if (process.env.NODE_ENV === 'production') {
  
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Optionally serve static files from the 'public' folder
app.use(express.static('public'));

// Set up the port and start listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
