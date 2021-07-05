const express = require('express');
const router = express.Router();
const data = require("../public/data")

router.get('/', (req, res) => {
    res.send(data);
})

router.post('/add', (req, res) => {
    let cardToAdd = req.body;
    data.push(cardToAdd);
    res.send(data)
})

router.delete('/del/:id', (req, res) => {
    console.log("id to delete: " + req.params.id)
    let cardToDel = data.findIndex((card) => card.id === parseInt(req.params.id))
    console.log(cardToDel)
    data.splice(cardToDel, 1)
    console.log(data)
    res.send(data)
})

module.exports = router;