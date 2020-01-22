import express from 'express';
import Anime from '../models/Anime';

const router = express.Router();

/* GET ALL */
router.get('/', (_req, res, next) => {
    Anime.find((err: any, products: any) => {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET BY ID */
router.get('/:id', (req, res, next) => {
    Anime.findById(req.params.id, (err: any, post: any) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE */
router.post('/', (req, res, next) => {
    Anime.create(req.body, (err: any, post: any) => {
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
