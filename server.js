const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost/percentDB", function(){
    console.log("Connected")
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static("public"))
app.use(express.static("node_modules"))

let sellApi = require("./Api/sellApi.js") 
app.use("/", sellApi)

let userApi = require("./Api/userApi.js") 
app.use("/", userApi)

let historyApi = require("./Api/historyApi.js") 
app.use("/", historyApi)

app.listen(9999)


