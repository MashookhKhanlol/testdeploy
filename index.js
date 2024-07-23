require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/twitter' ,(req,res)=>{
    res.send('welcome to twitter')
})

app.get('/login' ,(req,res)=>{
    res.send('<h1> Hello Please Login </h1>')
})

app.get('/youtube' , (req,res)=>{

})

app.listen(process.env.port , ()=>{
    console.log(`app is listening on port ${port}`)
})