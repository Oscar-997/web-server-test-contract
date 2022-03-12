const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tokens = new Schema({
    name: {type: String, require: true},
    id: {type: String, require: true},
    value: {
        id: {type: String},
        decimals: {type: Number},
        name: {type: String},
        symbol: {type: String},
        icon: {type: String}
    }
}, {
    timestamps:true,
    collection:'Token',
    
})

module.exports = mongoose.model('Token', Tokens )