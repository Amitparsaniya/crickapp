const express = require('express')
const User = require('../models/user.js')


const router = express.Router()


router.post('/create',async(req,res)=>{

  const {name,email,password} =req.body

  const oldUser = await User.findOne({email})

  if(oldUser) {
    return res.send({error:"Email is allready in use!"})
  } 

  const user = new User(req.body)

  await user.save()

  res.send({message:"user create sucessfully!"})
})


module.exports =router



