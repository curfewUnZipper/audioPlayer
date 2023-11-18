require("dotenv").config()
const express = require('express')
const path=require("path")
const app= express()
app.set('view engine','ejs') //anpother engine: pug
app.use(express.urlencoded({extended:true})) //middleware to excess form values

//bootstrap + jquery
// app.use("/css",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
// app.use("/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
// app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))


app.get("/music",(req,res) => {
    const fileNames = require(path.join(__dirname,"views","fileNames.js"))
    res.render('app',{text:"Cause a Raucous in the World!",files:fileNames.songs}) 
    //res.redirect('minimum.html')
    // res.render('mini',{pathCheck:__filename,
    //                     fileNamePath:fileNames.pathIs,
    //                     files:fileNames.songs})
})


//built-in middleware to serve html,css
app.use(express.static("public")) //use: /index.html in URL


//middleware for parsing JSON from forms, requests
//app.use(express.json()) //allows us to touch json from body

app.listen(process.env.PORT)