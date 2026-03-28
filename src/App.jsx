import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './contexts/TodoContext'
import { TodoForm, TodoItem } from './componets';
function App() {

    const [todos,setTodos] =useState([]);
    const addTodo = (todo) =>{
      setTodos((prev) => [{id:Date.now(),...todo},...prev]) 
    }
    const updateTodo = (id,todo) => {
        setTodos((prev) => prev.map((preveTodo) =>(
          preveTodo.id === id ? todo : preveTodo
        )))
    }
    const deleteTodo =(id) =>{
      setTodos((prev) => prev.filter((each) => each.id !== id)) 
    }
    const toggleComplete =(id) =>{
      setTodos((prev) => prev.map((preveTodo) => preveTodo.id === id ?
      {...preveTodo,completed: !preveTodo.completed}
      : preveTodo ))
    }

    useEffect(() =>{
      
      const todos = JSON.parse(localStorage.getItem("todosLs"));

      if(todos && todos.length >0){
        setTodos(todos);
      }

    },[])
    useEffect(() =>{
      localStorage.setItem("todosLs",JSON.stringify(todos))
    },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
  
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Yours Todos</h1>
          <div className='mb-4'>
            {/* todo form goes here */}
            <TodoForm/>

          </div>
          <div className='flex flex-wrap gap-y-3'>
            {/* loop and add todo item here */}
            {todos.map((todo) =>(
              <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo}/>

              </div>
            ))}
          </div>
        </div>

      </div>

    </TodoProvider>
  )
}

export default App
