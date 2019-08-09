import React from 'react';

const DeleteTodoButton = props => {
  const { removeTodo, id } = props;

  const handleDelete = (e) => removeTodo(id);

  return (
    <button 
      className="delete-button"
      onClick={handleDelete}>
      ✗
    </button>
  )
};

export default DeleteTodoButton;