const Tokens = require('../models/Tokens');

class DataController {
    index(req, res, next) {
        res.render('./home.hbs')
    }
}

module.exports = new DataController();