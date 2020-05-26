const auth = require('express').Router();
const controller = require('../controllers/authControllers');

auth.get('/', (req, res) => {
    controller;
});

module.exports = auth;
