import React from 'react';
//importing components
import Todo from './Todo';
const TodoList = ({ filteredTodos, setTodos, todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                
                {filteredTodos.map(todo => (
                    <Todo
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        key={todo.id}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;