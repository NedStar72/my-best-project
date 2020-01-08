const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Anime', AnimeSchema);
