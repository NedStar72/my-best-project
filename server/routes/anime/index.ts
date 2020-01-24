import express from 'express';
import mogoose from 'mongoose';
import { IAnimeDoc } from '../../models/Anime';

const Anime = mogoose.model('Anime');

const router = express.Router();

/* GET ALL */
router.get('/', (_req, res, next) => {
    Anime.find((err: any, products: IAnimeDoc[]) => {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET BY ID */
router.get('/:id', (req, res, next) => {
    Anime.findById(req.params.id, (err: any, post: IAnimeDoc) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE */
router.post('/', (req, res, next) => {
    Anime.create(req.body, (err: any, post: IAnimeDoc) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE */
router.put('/:id', (req, res, next) => {
    Anime.findByIdAndUpdate(req.params.id, req.body, (err: any, post: any) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE */
router.delete('/:id', (req, res, next) => {
    Anime.findByIdAndRemove(req.params.id, req.body, (err: any, post: any) => {
        if (err) return next(err);
        res.json(post);
    });
});

export default router;
