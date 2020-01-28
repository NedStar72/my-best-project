import mongoose from 'mongoose'
import db from './db.config.json'
import AnimeSchema, { IAnimeDoc } from '../models/Anime'

// Models registration
mongoose.model<IAnimeDoc>('Anime', AnimeSchema);

export default mongoose.connect(`mongodb://${db.host}/${db.name}`, db.opts);