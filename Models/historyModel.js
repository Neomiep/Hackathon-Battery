const mongoose = require("mongoose")
const Schema = mongoose.Schema

let historySchema = new Schema({
    amount: Number,
    userBuying: [{type:Schema.Types.ObjectId, ref: "user"}],
    userSelling: [{type:Schema.Types.ObjectId, ref: "user"}],
})

let History = mongoose.model("history", historySchema)

module.exports = History;