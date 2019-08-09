import React from 'react';

const DeleteCompletedbutton = props => {
  const { handler } = props;

  return (
    <button 
      className="delete-completed"
      onClick={handler}>
      Delete All Completed Todos
    </button>
  )
}

export default DeleteCompletedbutton;