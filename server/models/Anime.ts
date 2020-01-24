import { Schema, Document } from 'mongoose';

const AnimeSchema = new Schema({
  title: String,
  description: String,
  updated_date:
  {
    type: Date,
    default: Date.now
  }
});

export interface IAnime {
  _id: string,
  title: string,
  description: string
}

export type IAnimeDoc = IAnime & Document

export default AnimeSchema