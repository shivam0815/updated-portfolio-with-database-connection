const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Node.js module for handling file paths

// Create the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactport')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Create a schema and model for the contact form data
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Route to handle form submissions
app.post('/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).send('Contact saved');
    } catch (err) {
        res.status(400).send('Error saving contact');
    }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
