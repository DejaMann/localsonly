const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema ({
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    address: {type: String, required: true}
})

module.exports = mongoose.model('Truck', truckSchema)