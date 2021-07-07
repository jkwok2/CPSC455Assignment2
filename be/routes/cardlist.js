const express = require('express');
const router = express.Router();
const data = require("../public/data")
const mongoose = require("mongoose");
const cardSchema = require("../models/card_model")
const Card = mongoose.model('Card', cardSchema)

// async function getCards() {
//     const cardList = await Card.find();
// }

router.get('/', async function (req, res) {
    // const promise = Card.find();
    // promise.then((cardstuff) => {
    //     res.send(cardstuff);
    // })
    // const response = getCards();
    try {
        let cardList = await Card.find();
        res.send(cardList);
    } catch (err) {
        res.send(err);
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
        res.send("failed");
    }
    // data.push(cardToAdd);
    // console.log(cardToAdd)
    // res.send(data)
})

router.post('/reset', async function (req, res) {
    try {
        Card.deleteMany({}, async () => {
            let newCardList = await Card.find();
            res.send(newCardList);
        })
    } catch (err) {
        console.log(err);
        res.send("failed");
    }
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