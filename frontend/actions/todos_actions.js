import * as ApiUtils from '../util/todos_api';

// action types

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// action creators

const receiveTodos = (todos) => {
  return ({
    type: RECEIVE_TODOS,
    todos: todos
  });
};

const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  todo: todo
});

// bound action creators

export const fetchTodos = () => dispatch => {
  return (
    ApiUtils.fetchTodos()
    .then(todos => dispatch(receiveTodos(todos)))
  );
};

export const removeTodo = id => dispatch => {
  return (
    ApiUtils.deleteTodo(id)
    .then(todo => dispatch(removeTodo(todo)))
  );
};

export const updateTodo = todo => dispatch => {
  return (
    ApiUtils.updateTodo(todo)
    .then(todo => dispatch(receiveTodo(todo)))
  );
};

export const createTodo = todo => dispatch => {
  return (
    ApiUtils.createTodo(todo)
    .then(todo => dispatch(receiveTodo(todo)))
  );
};