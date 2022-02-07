import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
<<<<<<< Updated upstream
=======
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
