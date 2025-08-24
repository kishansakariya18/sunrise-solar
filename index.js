const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

connectDB()


// Routes
require('./routes/index')(app)

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Solar App API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});