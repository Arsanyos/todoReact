import React from 'react';
//we can write javascript code and function

<<<<<<< Updated upstream
const Form = ({ inputText, setInputText, todos, setTodos}) => {
=======
const Form = ({ inputText, setInputText, todos, setTodos,setStatus}) => {
>>>>>>> Stashed changes
 const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() },
        ]);
        setInputText("");
<<<<<<< Updated upstream
=======
           const statusHandler = (e) => {
        setStatus(e.target.value);
    }
>>>>>>> Stashed changes
    }
    return (
    <div>
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" id="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
<<<<<<< Updated upstream
=======
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
>>>>>>> Stashed changes
        </form>
        </div>
    );
}
export default Form;