const mongoose= require("mongoose");


const userSchema= new mongoose.Schema({
    name: String,
    mothersName: String,
    dob: String,
    gender: String,
    rollNo: String,
    email: String,
    department: String,
    year:String,
    phoneNo: String,
    address: String,
    state: String,
    pincode: String,
    password: String,
    confirmPassword: String,
    Image:String

});
module.exports= new mongoose.model("users",userSchema);