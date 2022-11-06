const express =require('express')
const mongoose =require('mongoose')

const UserSchema =mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: true
    },
    email:{
        type:String,
        trim:true,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
})

const User = mongoose.model('User',UserSchema)

module.exports =User