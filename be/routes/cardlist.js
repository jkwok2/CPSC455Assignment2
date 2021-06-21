const express = require('express');
const router = express.Router();

let cardlist = [
    {
        name: "maya",
        url: "https://www.usmagazine.com/wp-content/uploads/2018/11/Maya-The-Dog-3.jpg?w=700&quality=86&strip=all"
    },
    {
        name: "tucker",
        url: "https://yt3.ggpht.com/ytc/AAUvwnhbv9F6Du9P6GVUYfap8qBfe2_nUGqH6xm3HE9C3Q=s900-c-k-c0x00ffffff-no-rj"
    }
]

router.get('/', (req, res, next) => {
    res.send(cardlist);
})

module.exports = router;