const express = require('express');
const router = express.Router();
const data = require("../public/data")
const mongoose = require("mongoose");
const cardSchema = require("../models/card_model")
const Card = mongoose.model('Card', cardSchema)

router.get('/', async function (req, res) {
    try {
        let cardList = await Card.find();
        res.send(cardList);
    } catch (err) {
        res.send(err);
    }
})

router.get('/cuteFilter', async function (req, res) {
    try {
        let cuteCards = await Card.find({cuteness: {$gt: 5}})
        res.send(cuteCards);
    } catch (err) {
        res.send(err)
    }
})

router.post('/add', async function (req, res) {
    let cardToAdd = new Card({
        name: req.body.name,
        url: req.body.url,
        _id: req.body._id,
        cuteness: req.body.cuteness
    });
    try {
        await cardToAdd.save();
        let newCardList = await Card.find();
        res.send(newCardList);
    } catch (err) {
        res.send(err);
    }
})

router.post('/reset', async function (req, res) {
    try {
        Card.deleteMany({}, async () => {
            let newCardList = await Card.find();
            res.send(newCardList);
        })
    } catch (err) {
        console.log(err);
        res.send("failed to reset");
    }
})

router.delete('/del/:id', (req, res) => {
    try {
        Card.deleteOne({ "_id": req.params.id }, async () => {
            let newCardList = await Card.find();
            res.send(newCardList);
        })
    } catch (err) {
        res.send("failed to delete card")
    }
})

module.exports = router;