import mongoose from 'mongoose';

const AnimeSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  description: String,
  updated_date:
  {
    type: Date,
    default: Date.now
  },
});

export default mongoose.model('Anime', AnimeSchema);