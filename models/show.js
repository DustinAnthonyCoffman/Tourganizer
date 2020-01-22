const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = new Schema({
    lineup: String,
    venue: String,
    date: Date,
    address: String,
    city: String,
    state: String,
    pay: Number,
    confirmed: Boolean

})



module.exports = mongoose.model('Show', showSchema);



