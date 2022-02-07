import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    return (
        <div className="todo">
            <li className="todo container"}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
        </div>
    );
}
export default Todo;
