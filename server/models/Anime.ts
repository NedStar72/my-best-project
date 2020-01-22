import mongoose from 'mongoose';

const AnimeSchema = new mongoose.Schema({
  title: String,
  description: String,
  updated_date:
  {
    type: Date,
    default: Date.now
  }
});

export interface IAnime {
  _id: String,
  title: String,
  description: String
}

export default mongoose.model('Anime', AnimeSchema);