const express = require('express');
const db = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json(await db('recipes'))
    } catch(err) {
        next(err)
    }
})

router.get('/', (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})

router.get('/', (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})

router.get('/', (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})

module.exports = router;