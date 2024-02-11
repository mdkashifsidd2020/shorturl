const express = require("express")
const app = express()
const urlRoute = require("./routes/router")
PORT = 9100
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const path=require("path")

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use("/",urlRoute)


app.use("/analytics",urlRoute)




app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})