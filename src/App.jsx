import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './action/todoActions';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = ({ todos, addTodo, toggleTodo }) => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
