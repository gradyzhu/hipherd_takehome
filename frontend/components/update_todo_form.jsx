import React from 'react';
import Checkbox from './checkbox';

const UpdateTodoForm = props => {
  const { handleSubmit, handleCheck, handleInput, checked, value } = props;

  return (
    <>
      <Checkbox
        checked={checked}
        handleCheck={handleCheck} />
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          onChange={handleInput} 
          value={value}>
        </input>
      </form>
    </>
  )
};

export default UpdateTodoForm;