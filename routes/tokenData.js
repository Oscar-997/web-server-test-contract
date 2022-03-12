const express = require('express');
const router = express.Router();

const DataController = require('../controller/DataController');
const Tokens = require('../models/Tokens');

router.get('/', DataController.index)

router.get('/token/', async (req, res, next) => {
    const result = await Tokens.find();
    return res.status(200).json({ result });
});

router.post("/token/", async (req, res, next) => {
    const { name, id, value } = req.body;
    console.log(name, id, value);
    const token = new Tokens({
        name,
        id,
        value
    });
    await token.save();
    return res.status(200).json({ message: "Create succeed" });
})

module.exports = router


// await axios.post("http://localhost:5000/token", {
        //     name: "Haha token",
        //     id: "123",
        //     value: {
        //         id: "123",
        //         name: "haha token",
        //         symbol: result.symbol,
        //         decimals: result.decimals,
        //         icon: ""
        //     }
        // }).then(rep => console.log('rep', rep.data.result));
