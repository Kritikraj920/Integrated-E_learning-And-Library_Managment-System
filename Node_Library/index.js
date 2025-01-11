const express = require("express");
const mongoose= require("mongoose");
const app = express();
app.use(express.json());
const path =require('path')
const cors = require("cors");
app.use(cors());
// const myImage= require("../react-project/src/Images")
// app.use('/images', express.static(path.join(__dirname, 'public', 'Images')));

mongoose.connect("mongodb://127.0.0.1:27017/Library-Project")
.then(()=>{
    console.log("Succesfully connected to database");
}).catch((err)=>{
    console.log(err);
});


const Users = require("./Routers/userRouter"); 
app.use("/user",Users);

const Admin = require("./Routers/AdminRouter"); 
app.use("/admin",Admin);



app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Node server start");
});



app.listen(5000);
