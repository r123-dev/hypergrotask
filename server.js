//require('dotenv').config();
require('dotenv').config();
const express=require('express');
const app=express();
const stockroute=require("./router/routing");
const connectDb=require("./config/db");



const cors=require("cors");
const bodyParser=require('body-parser')
app.use(cors());

app.use(express.json());
//app.use(errorMiddleware);
app.use(bodyParser.json())
app.use("/api/stocks",stockroute);

const PORT=5000
connectDb().then(()=>{


app.listen(PORT,()=>{
  console.log(`server is running on port : ${PORT}`);
});
});
