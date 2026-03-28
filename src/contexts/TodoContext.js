import { createContext ,useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id :1,
            todo: "full stack course",
            completed: false
        },
        
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})
export const userTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
