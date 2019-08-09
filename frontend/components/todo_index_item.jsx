import React, { useState } from 'react';
import DeleteTodoButton from './delete_todo_button';
import UpdateTodoForm from './update_todo_form';

const TodoIndexItem = props => {
  const { updateTodo, removeTodo, todo: {id, complete, body} } = props;
  const [ inputValue, setInputValue ] = useState(body);
  const [ isInputChecked, setIsInputChecked ] = useState(complete);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({
      id: id,
      body: inputValue,
      complete: isInputChecked
    });
  };

  const handleInput = (e) => {
    let value = e.currentTarget.value;
    setInputValue(value);
  };

  const handleCheck = (e) => {
    e.currentTarget.checked = !isInputChecked;
    setIsInputChecked(!isInputChecked);
    updateTodo({
      id: id,
      body: inputValue,
      complete: !isInputChecked
    });
  };

  return(
    <div className="todo-index-item">
      <UpdateTodoForm
        handleSubmit={handleSubmit}
        handleCheck={handleCheck}
        handleInput={handleInput}
        value={inputValue}
        checked={isInputChecked} />
      <DeleteTodoButton 
        removeTodo={removeTodo} 
        id={id} />
    </div>
  )
};

export default TodoIndexItem;