import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions/todoActions';
import './style.css';


const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </label>
          <div key={todo.id}>
    <span>{todo.text}</span>
    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
  </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
