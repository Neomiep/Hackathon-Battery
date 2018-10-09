let router = require("express").Router();
let Sell = require('./Models/sellingModel.js')

router.post('/sell',(req, res) =>{
const newSell= new Sell(req.body)
newSell.save()
res.send(newSell)
});



module.exports = router;