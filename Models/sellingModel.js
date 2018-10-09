const mongoose = require("mongoose")
const Schema = mongoose.Schema

let sellingSchema = new Schema({
    amount: Number,
    userSelling: [{type:Schema.Types.ObjectId, ref: "user"}],
    buyers:[{type:Schema.Types.ObjectId, ref: "buyer"}],
})

let Selling = mongoose.model("selling", sellingSchema);

module.exports = Selling;