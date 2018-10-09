const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema ({
    firstName: String,
    lastName: String,
    userName: String,
    selling: [{type: Schema.Types.ObjectId, ref: "selling"}],
})

let User = mongoose.model("user", userSchema);

// User.findOne({ userName: '' }, function (err, user) {
//     if (err) {
//         res.status(500).send(err);
//     }
//   else {
//       res.send(user)
//   }
//   });

module.exports = User;