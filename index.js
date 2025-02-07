const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MONGO_URI = process.env.MONGO_URI;
dotenv.config(); 
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));
