const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router  = require('./userRouter')
const mongoose = require('mongoose');
const app = express();





// app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/api/v1",router);
const port = 3000;
// console.log(path.join(__dirname,'public'));
// const staticPath = path.join(__dirname,'public');
// app.use(express.static(staticPath));


app.get("/",(req,res)=>{
    console.log(`<h1> server is running on ${port}</h1>`);
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/contact.html"));
})


// app.post(,)


app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`)
})