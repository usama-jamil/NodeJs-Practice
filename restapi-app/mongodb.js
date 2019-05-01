const  {MongoClient , ObjectID}= require('mongodb')

const  connectionURL ='mongodb://127.0.0.1:27017'
const  database ='coding-data'

MongoClient.connect(connectionURL ,{useNewUrlParser:true},(err , client) =>{
    if(err){
        return console.log('Unable to connect')
    }

    const db =client.db(database)

    // db.collection('users').insertOne({
    //     name:'usama jamil',
    //     age:24
    // },(err ,res)=>{
    //     if(err){
    //         return console.log("there is an error")
    //     }

    //     console.log(res.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'mithi 95',
    //         age:24
    //     },
    //     {
    //         name: "samuder Khan",
    //         age: 33
    //     }
    // ],(err ,res)=>{
    //         if(err){
    //             return console.log("there is an error")
    //         }
    
    //         console.log(res.ops)
    //     })


    // db.collection('tasks').insertMany([
    //     {
    //         descrition: "aloo",
    //         completed: false
    //     },
    //     {
    //         descrition: "naan",
    //         completed: true
    //     },
    //     {
    //         descrition: "kuch nahi",
    //         completed: false
    //     }
    // ],(err ,res)=>{
    //     if(err){
    //         return console.log("there is an error")
    //     }
    // console.log(res.ops)
    // })

    // db.collection('tasks').find({completed: false}).toArray((err,res)=>console.log(res))
    // db.collection('tasks').findOne({_id: new ObjectID("5cc99de07cd06e1220398907")},(err,res)=>{
    //     console.log(res)
    // })

    // db.collection('tasks').updateMany({completed:false},{
    //     $set:{
    //         completed:true
    //     }
    // }).then(res => console.log(res)).catch(err=>console.log(err))
    
    db.collection('tasks').deleteOne({completed:false},{
        $set:{
            completed:true
        }
    }).then(res => console.log(res)).catch(err=>console.log(err))
    
    client.close()

})