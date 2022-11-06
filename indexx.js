const express = require ('express')
const userRouter = require('./Routes/user.js')
require('dotenv').config()

require('./DB/index.js')

const app = express()
app.use(express.json())
app.use(userRouter)

app.get('/',(req,res)=>{
    res.send('hello india')
})
app.get('*',(req,res)=>{
    res.send('<h1>This page is not found!</h1>')
})
app.listen(5000,()=>{
    console.log('hello india.........!');
})