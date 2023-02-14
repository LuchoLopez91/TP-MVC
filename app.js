const express = require ("express")
const app = express();
const path = require ("path");

app.use(express.static("public"));

const mainRouter = require("./router/mainrouter")



app.use("/",mainRouter)


app.listen(3000, ()=>{
console.log("Servidor funcionando");
});