const express  = require("express")
const app = express()

app.use(express.json())

app.listen(3000, ()=>{
    console.log("The server is running on the port 3000");
})