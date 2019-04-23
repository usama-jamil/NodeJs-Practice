const path = require('path')
const express = require('express')

// console.log(path.join(__dirname,'../public'))

const app = express()
const publicDirectoryName = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryName))


app.get('/weather',(req,res)=>{
    res.send({
        city:'karachi',
        temperature:30
    })
})

app.listen(3000 , ()=> console.log('Server is running on 3000'))