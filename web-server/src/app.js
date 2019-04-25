const path = require('path')

const express = require('express')
const hbs = require('hbs')

const cityToday =require('./utils/cityToday')
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
        title:'HomePage',
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
        title: 'Help...!',
        name: 'Usama Jamil'
    })
})

app.get('/city',(req,res)=>{

    // console.log(cityToday())
    // if(!req.query.city){
    //     return res.send(cityToday())
    // }

   cityToday(undefined,cityRes =>{
       res.send(cityRes)
   })
    
    // res.send({
    //     city:req.query.city,
    //     temperature:30,
    // })
})  

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404  Article',
        name: 'Usama Jamil',
        errorMessage:'Help article Not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404 Page',
        name: 'Usama Jamil',
        errorMessage: "Page Not Found"
    })
})

app.listen(3000 , ()=> console.log('Server is running on 3000'))