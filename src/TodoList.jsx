import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {

    let [todos, setTodos] = useState(["Codegit "]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateNewTodo = (event) => {
        setNewTodo(event.target.value);
    }
    return (
        <div>
            <h2>Priotize your task's</h2>
            <div className="todolist">
                <div className="inpp">
                    <input className="inputclass"
                        placeholder="          add new task"
                        value={newTodo}
                        onChange={updateNewTodo} />
                    <button className="buttonclass" onClick={addNewTask}>Add</button>
                </div>
                <hr />
                <h3>Today's List</h3>
                <ul>
                    {
                        todos.map((todo) => (
                            <li>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}