import React from 'react';
//importing components
import Todo from './Todo';
const TodoList = ({ filteredTodos, setTodos, todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* Todos here is a set of object of each todo with text, completionstatus and id */}
                {/* Whereas todo is a single object that is mapped from todos */}
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