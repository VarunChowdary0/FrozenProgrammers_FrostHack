const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DATA_MODEL = require('./Models/UserDataSchema');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

mongoose.connect('mongodb+srv://custom_tan:varun_123@cluster0.epypnho.mongodb.net/zen_tab_DB?retryWrites=true&w=majority')
  .then(() => {
    console.log("DB connection successful....");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

let count = 0;

app.get('/',(req,res)=>{
    count++;
    console.log("/"+" ->"+count);
    res.status(200).json({"status":"online"});
})

app.post('/signup',(req,res)=>{
    count++;
    console.log("/signup"+" ->"+count);
    console.log(req.body);
    // DATA_MODEL.create(req.body)
    //     .then((resp)=>{
    //         res.status(200).json({message:"OK",data,})
    //     })
})

app.listen(1800, () => {
  console.log("Running on port 1800");
});
