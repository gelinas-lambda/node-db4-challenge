const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*').from('receipes')
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to get recipes from the database'});
        });
});