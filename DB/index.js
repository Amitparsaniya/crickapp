const express = require('express')
const mongoose  =require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('db connected sucessfully');
}).catch((e)=>{
    console.log(e);
})