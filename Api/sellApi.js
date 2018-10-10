let router = require("express").Router();
let Sale = require('../Models/sellingModel')
let User = require('../Models/userModel')

router.post('/users/:id/sell/:amount',(req, res) =>{
let id = req.params.id
let newSell= new Sale({amount: req.params.amount})
newSell.save()
User.findByIdAndUpdate(id, {$push:{"selling": newSell._id}}, {new:true}).exec((err)=>{
    if(err){res.status(500).send(err)}
})
res.send(newSell)
});


module.exports = router;