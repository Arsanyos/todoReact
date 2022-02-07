import React, { useState } from 'react';
//importing components
import Form from './Form';
import TodoList from './TodoList';
const App = () => {
    //states
    const [inputText, setInputText] = useState(" ");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
 
    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form setStatus={setStatus} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}
export default App;
