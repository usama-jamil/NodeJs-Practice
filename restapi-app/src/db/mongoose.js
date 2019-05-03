const  mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex: true
})



// const me =new User({
//     name: 'usama jamil',
//     age: 'aloo'
// })

// me.save().then( res => console.log(res)).catch(err =>  console.log(err))


// const me =new User({
//     name: 'haris jamil',
//     age: '55',
//     email: 'usamajamil006@gmai.com',
//     password: 'passwordsdfds'
// })

// me.save().then( res => console.log(res)).catch(err =>  console.log(err))

// const task = new Task({
//     description:'flsjdflfksdjff flklkjje4iotjdknerk',
//     completed:true
// })

// task.save().then( res => console.log(res)).catch(err =>  console.log(err))

// mongoose.disconnect()