require('dotenv').config();
const mongoose=require('mongoose');



const connectdb=async ()=>{
    try {
          mongoose.connect("mongodb://localhost:27017/Vivek");
        console.log("connection successful")
    } catch (error) {
        console.log("database connection error");
        process.exit(0);
    }
}

module.exports=connectdb;