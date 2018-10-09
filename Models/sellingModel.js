const mongoose = require("mongoose")
const Schema = mongoose.Schema

let sellingSchema = new Schema({
    amoant: String,
    userSelling: [{type:Schema.Types.ObjectId, ref: "user"}],
    buyers:[],
})

let Selling = mongoose.model("selling", sellingSchema);

module.exports = Selling;