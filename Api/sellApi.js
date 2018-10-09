let router = require("express").Router();
let Sell = require('../Models/sellingModel.js')

router.post('/sell',(req, res) =>{
const newSell= new Sell(req.body)
newSell.save().exec((err,data)=>{
    if(err){res.status(500).send(err)}
    else{
        res.send(data)
    }
})
});



module.exports = router;