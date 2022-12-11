import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({addTodo}) => {

    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value);
    }

    const input = e => {
        e.preventDefault();
        addTodo({task, id: uuid()});
        setTask("");
    }

    return (
        <div>
            <form onSubmit={input}>
                <div>
                    <label htmlFor="task">New To Do</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="task"
                        value={task}
                        id="task"
                    />
                </div>
                
                <button>Add To Do</button>
            </form>
        </div>
    );
}

export default NewTodoForm;