import React from 'react';

const FilterButton = props => {
  const { text, checked, handler } = props;

  let classname = checked ? "filter-on" : "filter-off";
  return (
      <button 
        className={classname}
        onClick={handler}>
        {text}
      </button>
  )
};

export default FilterButton;