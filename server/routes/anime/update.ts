import express from 'express';
import mogoose from 'mongoose';
import { IAnimeDoc } from '../../models/Anime';

const Anime = mogoose.model<IAnimeDoc>('Anime');

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Anime.findByIdAndUpdate(req.params.id, req.body)
        .then(post => res.json(post))
        .catch(err => next(err));
}
