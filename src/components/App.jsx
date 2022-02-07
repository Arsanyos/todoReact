import React, { useState, useEffect } from 'react';
//importing components
import Form from './Form';
import TodoList from './TodoList';
const App = () => {
//function
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    //states
    const [inputText, setInputText] = useState(" ");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    //USE EFFECT
    useEffect(() => {
        filterHandler();
    }, [todos, status]);
 
    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form setStatus={setStatus} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
        </div>
    );
}
export default App;
