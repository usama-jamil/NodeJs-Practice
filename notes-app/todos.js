const chalk = require("chalk");
const fs = require("fs");


const addTodos = (title, body) => {
  const todos = loadTodos();

  const duplicateTodo = todos.find(todo => todo.title === title);

  if (!duplicateTodo) {
    todos.push({
      title,
      body
    });
  } else {
    console.log("Todo Already Added!...");
  }

  saveTodos(todos);
};

const removeTodos = title => {
  const todos = loadTodos();
  const todosToKeep = arrayRemove(todos, title);

  todos.length < todosToKeep.length
    ? console.log(chalk.bgRed("No todos Found!"))
    : console.log(chalk.bgGreen("Todo removed!"));

  saveTodos(todosToKeep);
};

const listTodos =()=>{
    const todos = loadTodos()
    console.log(chalk.inverse("Your todos"))

    todos.forEach(todo => {
        console.log(todo.title)
    });

}

const readTodos = title =>{
    const todos = loadTodos()

   const readTodo = todos.find(todo=>todo.title === title)

   if (readTodo) {
       console.log(chalk.blue(readTodo.title))
       console.log(readTodo.body)
   } else {
    console.log(chalk.red("No Todo Found!"))
       
   }

}
const saveTodos = todos => {
  fs.writeFileSync("todos.json", JSON.stringify(todos));
};
const loadTodos = () => {
  try {
    const dataBuffer = fs.readFileSync("todos.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);

    return data;
  } catch (error) {
    return [];
  }
};

const arrayRemove = (todos, title) => {
  return todos.filter(todo => todo.title != title);
};

module.exports = {
  addTodos,
  removeTodos,
  listTodos,
  readTodos,
};
