const express = require('express');

const PersonsController = require('../controllers/PersonsController');
const router = express.Router()

router.get('/persons', async (req, res) => {
    const persons = await PersonsController.getPersons();
    res.json(persons);
});

router.get('/persons/search', async (req, res) => {
    const name = req.query.name;
    const persons = await PersonsController.searchPersons(name);
    res.json(persons);
});

router.get('/persons/actedin', async (req, res) => {
    const name = req.query.name;
    const movies = await PersonsController.actedIn(name);
    res.json(movies);
});

exports.router = router;