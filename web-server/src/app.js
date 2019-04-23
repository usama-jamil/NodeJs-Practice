const express = require('express')


const app = express()

app.get('',(req,res)=>{
    res.send('Hello Express!')
})

app.get('/help',(req,res)=>{
    res.send('Help Page!')
})

app.get('/about',(req,res)=>{
    res.send('about Express!')
})

app.get('/weather',(req,res)=>{
    res.send('weather!')
})

app.listen(3000 , ()=> console.log('Server is running on 3000'))