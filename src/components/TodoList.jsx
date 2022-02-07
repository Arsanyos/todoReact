import React from 'react';
//importing components
import Todo from './Todo';
const TodoList = ({ setTodos, todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map( todo =>{
               	 <Todo
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
               }}
            </ul>
        </div>
    );
}
export default TodoList;
