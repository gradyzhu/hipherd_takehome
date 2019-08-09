import React from 'react';
import TodosIndex from './todos_index';
import { connect } from 'react-redux';
import CreateTodosForm from './create_todo_form';
import { fetchTodos, updateTodo, createTodo, removeTodo } from '../actions/todos_actions';

const App = props => {
  const { fetchTodos, updateTodo, createTodo, removeTodo, todos } = props;

  return (
    <div className="app">
      <CreateTodosForm
        createTodo={createTodo}
      />
      <TodosIndex
        fetchTodos={fetchTodos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        todos={todos}
      />
    </div>
  )
};

const mstp = ({ todos }, ownProps) => {
  return ({
    todos: Object.values(todos)
  });
};

const mdtp = dispatch => {
  return ({
    fetchTodos: () => dispatch(fetchTodos()),
    updateTodo: todo => dispatch(updateTodo(todo)),
    createTodo: todo => dispatch(createTodo(todo)),
    removeTodo: id => dispatch(removeTodo(id))
  });
};
export default connect(mstp, mdtp)(App);