const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/contactUs").then(()=>{
    console.log("mongodb is connected successfully");
}).catch((err)=>{
    console.log(err);
})

const contactData = mongoose.Schema({
    name:String,
    email:String,
    password: Number
})

const ContactData = new mongoose.model("ContactData",contactData);

const registerFunction = (req,res)=>{
    const adder = async()=>{

        const data = await ContactData.create({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        console.log(data);
    }
    res.json({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    console.log(req.body);
    adder();
}

module.exports = registerFunction;