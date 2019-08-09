import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  DELETE_TODO
} from '../actions/todos_actions';

const todosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      let id = action.todo.id;
      return Object.assign(newState, { [id]: action.todo });
    case DELETE_TODO:
      delete newState[action.todo.id];
      return newState;
    default:
      return oldState;
  }
};

export default todosReducer;