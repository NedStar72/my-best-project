import express from 'express';
import mogoose from 'mongoose';
import { IAnimeDoc } from '../../models/Anime';
import { amount } from './amount'

const Anime = mogoose.model<IAnimeDoc>('Anime');

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const search = req.query.search || "";
    const page = Number(req.params.page);
    if (!page)
        return res.status(400);
    Anime.find({ title: { "$regex": search, "$options": "i" } })
        .skip((page - 1) * amount)
        .limit(amount)
        .then(post => res.json(post))
        .catch(err => next(err));
};
