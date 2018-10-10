let router = require("express").Router();
let Sale = require('../Models/sellingModel')
let User = require('../Models/userModel')

router.post('/users/:id/sell/:amount', (req, res) => {
    let id = req.params.id
    let newSell = new Sale({ amount: req.params.amount, userSelling: id })
    newSell.save((err, sell) => {
        if (err) { res.status(500).send(err) }
        else {
            User.findByIdAndUpdate(id, { $push: { "selling": sell._id } }, { new: true }).exec((err) => {
                if (err) { res.status(500).send(err) }
                else { res.send(sell) }
            })
        }
    })
});

router.get("/users/sell", (req, res) => {
    Sale.find().populate("userSelling").exec((err, sales) => {
        if (err) {
            res.status(500).send(err);
        }
        else { res.send(sales) }
    })
})

router.delete("/users/sell/:saleId/:username", function (req, res) {
    const saleId = req.params.saleId
    const username = req.params.username
    User.update({ userName: username }, { $pull: { selling: saleId } }, { new: true }).exec(function (err, user) {
        if (err) {
            res.status(500).send(err)
        }
        else {
            Sale.findByIdAndRemove(saleId, function (err, data) {
                if (err) { console.error(err); res.status(500).send(err); }
                res.send(console.log("Deleted"))
            });
        }
    })
})


module.exports = router;