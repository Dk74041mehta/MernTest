const mongoose = require('mongoose');

const LocalMongoURL = "mongodb://127.0.0.1:27017/Office";

mongoose.connect(LocalMongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log("MongoDB disconnected");
});

db.on('connected', () => {
  console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
  console.error("MongoDB connection error:", err);
});

module.exports = db
