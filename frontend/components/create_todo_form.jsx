import React, { useState } from 'react';

const CreateTodoForm = props => {
  const { createTodo } = props;
  const [ inputValue, setInputValue ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({
      body: inputValue,
      complete: false
    });
    setInputValue("");
  };

  const handleInput = (e) => {
    let value = e.currentTarget.value;
    setInputValue(value);
  };

  return(
    <form className="create-todo-form-wrap" onSubmit={handleSubmit}>
      <div className="create-todo-form">
        <input 
          placeholder="new todo here"
          className="create-input" 
          value={inputValue}
          onChange={handleInput}>
        </input>
        <button className="create-button">
          Create
        </button>
      </div>
    </form>
  )
};


export default CreateTodoForm;
