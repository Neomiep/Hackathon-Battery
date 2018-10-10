const mongoose = require("mongoose")
const Schema = mongoose.Schema

let sellingSchema = new Schema({
    amount: Number,
    userSelling:[{type: Schema.Types.ObjectId, ref: "user"}]
})

let Sale = mongoose.model("selling", sellingSchema);

module.exports = Sale;