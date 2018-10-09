let router = require("express").Router();
let Sell = require('../Models/sellingModel.js')

router.post('/homepage/:id/sell',(req, res) =>{
    let id = req.params.id
const newSell= new Sell(req.body)
newSell.save().exec((err,data)=>{
    if(err){res.status(500).send(err)}
    else{
        res.send(data)
    }
})
});
//fix


module.exports = router;