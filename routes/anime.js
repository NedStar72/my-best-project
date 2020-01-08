const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Anime = require('../models/Anime.js');

/* GET ALL */
router.get('/', function (req, res, next) {
    Anime.find(function (err, products) {
        if (err)
            return next(err);
        res.json(products);
    });
});

/* GET BY ID */
router.get('/:id', function (req, res, next) {
    Anime.findById(req.params.id, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});

/* SAVE */
router.post('/', function (req, res, next) {
    Anime.create(req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});

/* UPDATE */
router.put('/:id', function (req, res, next) {
    Anime.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});

/* DELETE */
router.delete('/:id', function (req, res, next) {
    Anime.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});

module.exports = router;
