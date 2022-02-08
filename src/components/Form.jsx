import React from 'react';
//we can write javascript code and function

const Form = () => {

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