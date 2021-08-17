var path = require('path')
const express = require('express')
const app = express();
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
    console.log(req.body);
})
app.listen(PORT,  ()=> {
    console.log(`Example app listening on port ${PORT}!`);
  });

  module.exports = app