const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(path.join(__dirname,'../public'))

const app = express()

const publicDirectoryName = path.join(__dirname,'../public')
const viewsPath =path.join(__dirname,'../templates/views')
const partialsPath =path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryName))

app.get('',(req,res)=>{
    res.render('index',{
        title:'homePage',
        name:'Usama Jmail'
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
        name: 'Usama Jamil'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        city:'karachi',
        temperature:30
    })
})

app.listen(3000 , ()=> console.log('Server is running on 3000'))