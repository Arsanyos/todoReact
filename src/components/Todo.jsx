import React from 'react';

<<<<<<< Updated upstream
const Todo = ({ text, todo, todos, setTodos }) => {
<<<<<<< Updated upstream
=======
 const deleteHandler = (e) => {
        //it deletes when the el.id is equal to the todo id(WHEN THE CONDITION IS FALSE)
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
>>>>>>> Stashed changes
=======
//known as arrow function
const Todo = ({ text, todo, todos, setTodos }) => {
    //events
    const deleteHandler = (e) => {
        //it deletes when the el.id is equal to the todo id(WHEN THE CONDITION IS FALSE)
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
>>>>>>> Stashed changes
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
<<<<<<< Updated upstream
 
    return (
        <div className="todo">
            <li className="todo container"}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
<<<<<<< Updated upstream
=======
             <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
>>>>>>> Stashed changes
           
        </div>
    );
}
export default Todo;
=======
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Todo;
>>>>>>> Stashed changes
