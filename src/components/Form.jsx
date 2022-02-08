import React from 'react';
//we can write javascript code and function

const Form = ({ inputText, setInputText, todos, setTodos,setStatus}) => {
 const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() },
        ]);
        setInputText("");
           const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    }
    return (
    <div>
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" id="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted now</option>
                </select>
            </div>
        </form>
    </div>
    );
}
export default Form;