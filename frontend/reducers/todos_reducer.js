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
      return Object.assign(newState, action.todos);
    case RECEIVE_TODO:
      return { [action.todo.id]: action.todo };
    case DELETE_TODO:
      delete newState[action.photoId];
      return newState;
    default:
      return oldState;
  }
};

export default todosReducer;