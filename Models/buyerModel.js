const mongoose = require("mongoose")
const Schema = mongoose.Schema

let buyerSchema = new Schema({
    userbuying: [{type:Schema.Types.ObjectId, ref: "user"}],
    aproved: Null
})

let Buyer = mongoose.model("buyer", buyerSchema)

module.exports = Buyer;