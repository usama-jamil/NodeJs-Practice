const validator = require('validator')
const yargs = require("yargs")
const todos = require('./todos')

//costomize yargs version
yargs.version('1.0.1')

// Create Add Command
yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:"Todo Title",
            demandOption:true, // we need that option every time
            type:'string'      // input of that option
        },
        body:{
            describe:"Todo body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({title , body})=>todos.addTodos(title,body)
})

// Create Remove Command
yargs.command({
    command:'remove',
    describe:'remove a todo',
    builder:{
        title:{
            describe:"Todo Title",
            demandOption:true, 
            type:'string'      
        }
    },
    handler: ({title})=>todos.removeTodos(title)
})

// Create List Command
yargs.command({
    command:'list',
    describe:'list a todo',
    handler: ()=>todos.listTodos()
})

// Create Read Command
yargs.command({
    command:'read',
    describe:'read a todo',
    builder:{
        title:{
            describe:"Todo Title",
            demandOption:true, 
            type:'string'      
        }
    },
    handler: ({title})=>todos.readTodos(title)
})

yargs.parse()


// console.log(yargs.argv)



// console.log(process.argv)


// const command =process.argv[2]
// if (command === 'add') {
//     console.log('adding!...')
// } else if (command === 'remove') {
//     console.log('removing!...')
// }

// console.log(validator.isEmail('usamajamil006@gmail.com'))
// console.log(chalk.blue.bold("Success! Aloo"));

// fs.writeFileSync('notes.txt','pakistan zindabad')
// fs.appendFileSync('notes.txt'," this is how i do")