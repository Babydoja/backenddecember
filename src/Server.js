
const taskrouter=require('../Route/Taskroute')
const express  = require('express')
require('dotenv').config()
const app = express()
const PORT = 5000
const cors = require('cors')
const mongoose = require("mongoose")


app.use(cors(
    {  origin:["http://localhost:3001",'https://crudss-delta.vercel.app/'] }
   ))
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(taskrouter)
// to connect json file to postman
// app.use(cors(
//     {  origin:["http://localhost:3000"] }
//    ))

mongoose
.connect (process.env.MONGO_URL)
.then ((req,res)=>{
    app.listen (PORT,()=>{
        console.log(`server is now running ${PORT}` );
    })
    console.log('db connected');
    app.get('/',(req,res)=>{
    res.send('server home page')
    })
    
})
    .catch((err)=>{
    console.log(err);
})

