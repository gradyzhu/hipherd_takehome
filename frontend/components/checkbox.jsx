import React from 'react';

const Checkbox = props => {
  const { checked, handleCheck } = props;

  let classname = checked ? "checked" : "not-checked";
  let innerHTML = checked ? "✓" : "";
  
  return (
    <div
      className={classname}
      onClick={handleCheck}>
      {innerHTML}
    </div>
  )
};

export default Checkbox;