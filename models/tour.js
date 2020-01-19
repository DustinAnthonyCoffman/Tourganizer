
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tourSchema = new Schema({
    name: String,
    shows: [
        {
            type: Schema.Types.ObjectId,
			ref: 'Show'
        }
    ]
})


module.exports = mongoose.model('Tour', tourSchema)
