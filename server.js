var path = require('path')
const express = require('express')
const app = express();
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 8800;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('src'));

//To encrypt API key
// const dotenv = require('dotenv');
// dotenv.config();


app.get('/', (req, res)=>{
    res.sendFile(__dirname+'src/client/views/contactMe.html')
})

app.post('/',(req, res)=>{
    //console.log(req.body);
    const transporter = nodemailer.createTransport({
       
        service:'gmail',
        auth:{
            user:`${process.env.EMAIL_ADRESS}`,
            pass:`${process.env.EMAIL_PASSWORD}`
        }
    }) 
    const mailOptions = {
        from:req.body.email,
        to:'ziqi.wang666@gmail.com',
        subject:`You have a contact from ${req.body.name} `,
        text:req.body.text
    }
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error)
            res.send('error');
        }else{
            console.log('Email sent:' + info.response)
            res.send('Success')
        }
    })
})
app.listen(PORT,  ()=> {
    console.log(`Example app listening on port ${PORT}!`);
  });

  module.exports = app