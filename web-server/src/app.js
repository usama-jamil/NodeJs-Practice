const path = require('path')
const express = require('express')

// console.log(path.join(__dirname,'../public'))

const app = express()
const publicDirectoryName = path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryName))

app.get('',(req,res)=>{
    res.render('index',{
        name:'usama Jmail'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Usama Jamil'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'dynamic  Handlebar file',
        message: 'Usama Jamil'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        city:'karachi',
        temperature:30
    })
})

app.listen(3000 , ()=> console.log('Server is running on 3000'))