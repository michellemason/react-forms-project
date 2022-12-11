import React from "react";
import './Todo.css';

const Todo = ({id, task, handleRemove}) => {
    const remove = () => handleRemove(id);
    return (
        <div className="Todo">
            <li className="Todo-li">{task} <button onClick={remove}>X</button></li>
            
        </div>
    )
}

export default Todo;