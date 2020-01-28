import express from 'express';
import mogoose from 'mongoose';
import { IAnimeDoc } from '../../models/Anime';

const Anime = mogoose.model<IAnimeDoc>('Anime');

export const amount = 2;

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const search = req.query.search || "";
    Anime.countDocuments({ title: { "$regex": search, "$options": "i" } })
        .then(post => res.json(post))
        .catch(err => next(err));;
}
