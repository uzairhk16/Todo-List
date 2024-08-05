import { useState } from "react";
import "./TodoList.css";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    let [todos, setTodos] = useState([{ task: "sample", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...todos, { task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    }

    let updateNewTodo = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id!= id));
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
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span> {todo.task} </span>
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}