const express = require('express')


const app = express()

app.get('',(req,res)=>{
    res.send('<h1> Hello Express </h1>')
    res.send('Hello Express!')
})

app.get('/help',(req,res)=>{
    res.send('Help Page!')
})

app.get('/about',(req,res)=>{
    res.send('<h1> About </h1>')
})

app.get('/weather',(req,res)=>{
    res.send({
        city:'karachi',
        temperature:30
    })
})

app.listen(3000 , ()=> console.log('Server is running on 3000'))