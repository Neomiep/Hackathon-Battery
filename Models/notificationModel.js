const mongoose = require("mongoose")
const Schema = mongoose.Schema

let notificationSchema = new Schema({
    userbuying: [{type:Schema.Types.ObjectId, ref: "user"}],
    userselling: [{type:Schema.Types.ObjectId, ref: "user"}],
    amount: Number
})

let Notification = mongoose.model("notification", notificationSchema)

module.exports = Notification;