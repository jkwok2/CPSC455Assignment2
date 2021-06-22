const express = require('express');
const router = express.Router();
const data = require("../public/data")

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.send(data);
})

router.post('/', (req, res) => {
    res.send("foo");
})

module.exports = router;