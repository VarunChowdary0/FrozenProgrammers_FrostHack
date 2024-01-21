const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DATA_MODEL = require('./Models/UserDataSchema');
const e = require('express');

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
    DATA_MODEL.create(req.body)
        .then((resp)=>{
            res.status(200).json({message:"OK",data:resp})
        })
        .catch((err)=>{
            // console.log(err)
            res.status(400).json({message:"NO"})
        })
})

app.post('/login',(req,res)=>{
    count++;
    console.log("/login"+" ->"+count);
    DATA_MODEL.findOne(req.body)
        .then((resp)=>{
            if(resp !== null){
                res.status(200).json({message:"OK",data:resp});
            }
            else{
                res.status(400).json({message:"NO"});
            }
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json({message:"NO"});
        })
})

app.post('/update',(req,res)=>{
    count++;
    console.log("/update"+" -> "+count);

    const USER_UID = req.body;
    console.log(USER_UID);
})

app.listen(1800, () => {
  console.log("Running on port 1800");
});
