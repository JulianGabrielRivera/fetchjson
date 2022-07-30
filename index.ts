import axios from 'axios';
const url ='https://jsonplaceholder.typicode.com/todos/1';

// used to defined structure of an object
// we did this to tell typescript about what type of info we'll receive back from API

interface Todo {
    id:number;
    title:string;
    completed:boolean;
}
axios.get(url).then(response=>{
  

    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    // multi line string
    // console.log(`
    // The Todo with ID: ${id}
    // Has a title of: ${title}
    // Is it finished? ${completed}`)

    //  this has to match the order down there
    logTodo(id,title,completed);
})

//  if we put the types here then when we actually pass it, it will throw error if the types dont match so its useful for debugging
const logTodo = (id: number,title: string,completed: boolean) =>{
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}`)

}