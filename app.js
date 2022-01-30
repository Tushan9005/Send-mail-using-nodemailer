require('dotenv').config();
const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let details = {
    from: process.env.EMAIL,
    to: "dastushan9005@gmail.com",
    subject: "testing our nodemailer",
    text: "Hello World"
}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("It has an error",err)
    }
    else{
        console.log("Email has been sent!")
    }
})