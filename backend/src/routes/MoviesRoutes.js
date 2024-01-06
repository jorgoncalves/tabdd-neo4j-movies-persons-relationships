const express = require('express');

const MoviesController = require('../controllers/MoviesController');
const router = express.Router()

router.get('/movies', async (req, res) => {
    const movies = await MoviesController.getMovies();
    res.json(movies);
});

router.get('/movies/search', async (req, res) => {
    const title = req.query.title;
    const movies = await MoviesController.searchMovies(title);
    res.json(movies);
});

exports.router = router;