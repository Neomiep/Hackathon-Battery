const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema ({
    firstName: String,
    lastName: String,
    userName: String,
    selling: [{type: Schema.Types.ObjectId, ref: "selling"}],
})

let User = mongoose.model("user", userSchema);

module.exports = User;