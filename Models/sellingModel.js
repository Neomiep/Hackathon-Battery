const mongoose = require("mongoose")
const Schema = mongoose.Schema

let sellingSchema = new Schema({
    amount: Number,
})

let Sale = mongoose.model("selling", sellingSchema);

module.exports = Sale;