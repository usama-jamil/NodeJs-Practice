const fs = require('fs')




const dataBuffer= fs.readFileSync('1-json.json')
const dataJSON =dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'usama'
data.age = 55
console.log(data)
console.log(JSON.stringify( data))
fs.writeFileSync('1-json.json',JSON.stringify( data))


// const book ={
//     title:'title of book',
//     author:"author of the book"
// }

// const bookJson =JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJson)

// console.log(( bookJson))
// console.log(JSON.parse(bookJson))