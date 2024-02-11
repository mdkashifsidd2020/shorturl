const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mks2020:Nsti12345@clustermongo.sd3olad.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("MongoDB Connected")
}).catch((err)=>{
    console.log("error a gya",err)
})