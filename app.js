const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware: Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Atlas connection string (consider using environment variables for security)
const dbURI = 'mongodb+srv://vinayagamthaagamfoundation:2dtyrW9NqUUCsDTC@myportfolioproject.k892xc3.mongodb.net/myPortfolioProject?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a Mongoose schema for contact form data
const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create a Mongoose model from the schema
const Contact = mongoose.model('Contact', contactSchema);

// Endpoint to store contact form data
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ success: true, message: 'Data saved successfully.' });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ success: false, message: 'Error saving data', error: error.message });
  }
});

// Serve static files from the "public" directory (this includes your HTML/CSS/JS files)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
