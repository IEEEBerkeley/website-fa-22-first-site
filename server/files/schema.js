const mongoose = require("mongoose")

const foodItem = mongoose.model('Food', new Schema({
    name: { type: String },
    price: { type: Number }
}));

modules.export = {
    foodItem
}