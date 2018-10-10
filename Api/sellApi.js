let router = require("express").Router();
let Sale = require('../Models/sellingModel')
let User = require('../Models/userModel')

router.post('/users/:id/sell/:amount', (req, res) => {
    let id = req.params.id
    let newSell = new Sale({ amount: req.params.amount })
    newSell.save((err, sell) => {
        if (err) { res.status(500).send(err) }
        else {
            User.findByIdAndUpdate(id, { $push: { "selling": sell._id } }, { new: true }).exec((err) => {
                if (err) { res.status(500).send(err) }
                else{res.send(sell)}
            })
        }
    })
});


module.exports = router;