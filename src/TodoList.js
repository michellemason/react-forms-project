import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todoObj => {
        setTodos(todos => [...todos, todoObj]);
    }

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const todoComponents = todos.map(todo => (
        <Todo 
            id={todo.id}
            task={todo.task}
            handleRemove={remove}
        />
    ));

    return (
        <div>
            <h3>To Do List</h3>
            <NewTodoForm addTodo={addTodo} />
            {todoComponents}
        
        </div>
    )
}

export default TodoList;