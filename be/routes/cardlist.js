const express = require('express');
const router = express.Router();
const data = require("../public/data")

router.get('/', (req, res) => {
    res.send(data);
})

router.post('/add', (req, res) => {
    let cardToAdd = req.body;
    data.push(cardToAdd);
    res.send("post request complete")
})

module.exports = router;