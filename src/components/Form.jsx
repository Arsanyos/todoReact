import React from 'react';
//we can write javascript code and function

const Form = ({ inputText, setInputText, todos, setTodos}) => {
 const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() },
        ]);
        setInputText("");
    }
    return (
    <div>
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" id="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
        </div>
    );
}
export default Form;