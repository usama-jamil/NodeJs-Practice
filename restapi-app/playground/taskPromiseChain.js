require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ccc2e75c4cf26156437e1e1').then(task =>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then(results =>{
//     console.log(results)
// })


const deleteTaskAndCount = async (id,completed) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})

    return count
}

deleteTaskAndCount('5ccaf9f256bf392108775305',true).then(count =>{
    console.log(count)
}).catch(err =>{
    console.log(err)
})