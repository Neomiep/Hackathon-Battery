let router = require("express").Router();
let Sale = require('../Models/sellingModel')
let User = require('../Models/userModel')
let History = require("../Models/historyModel")

router.get("/users/history/:userId", (req, res) => {
    User.find({ _id: req.params.userId }, { history: true }).populate("history history.userSelling history.userBuying").exec((err, history) => {
        if (err) {
            res.status(500).send(err);
        }
        else { res.send(history) }
    })
})

router.post('/users/:userBuyingId/:userSellingUsername/history/:amount', (req, res) => {
    let userBuyingId = req.params.userBuyingId
    let userSellingUsername = req.params.userSellingUsername
    let amount = req.params.amount
    User.find({ userName: userSellingUsername }, { _id: true }, (err, userSellingId) => {
        if (err) { res.status(500).send(err) }
        else {
            let newHistory = new History({ amount: amount, userBuying: userBuyingId, userSelling: userSellingId, bought: "", sold: "" })
            if (userBuyingId == userSellingId[0]._id) {
                newHistory.save((err, history) => {
                    if (err) { res.status(500).send(err) }
                    else {
                        User.findByIdAndUpdate(userBuyingId, { $push: { "history": history._id } }, { new: true }).exec((err) => {
                            if (err) { res.status(500).send(err) }
                            else{
                                res.send(history)
                            }
                        })
                    }
                })
            }
            else {
                newHistory.save((err, history) => {
                    if (err) { res.status(500).send(err) }
                    else {
                        User.findByIdAndUpdate(userBuyingId, { $push: { "history": history._id } }, { new: true }).exec((err) => {
                            if (err) { res.status(500).send(err) }
                            else {
                                User.findByIdAndUpdate(userSellingId, { $push: { "history": history._id } }, { new: true }).exec((err) => {
                                    if (err) { res.status(500).send(err) }
                                    else {
                                        res.send(history)
                                    }
                                })
                            }
                        })

                    }

                })
            }
        }

    })
})

module.exports = router;