import React, { useEffect, useState } from 'react';
import TodoIndexItem from './todo_index_item';
import FilterButton from './filter_button';
import DeleteCompletedButton from './delete_completed_button';

const TodosIndex = props => {
  const { fetchTodos, todos, removeTodo, updateTodo } = props;
  const [ completeFilter, setCompleteFilter ] = useState(true);
  const [ incompleteFilter, setIncompleteFilter ] = useState(true);
  const [ allFilter, setAllFilter ] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const allTodos = todos.map(todo => {
    return (
      <TodoIndexItem 
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo} 
        updateTodo={updateTodo} />    
    )
  });

  const handleCompletedFilter = (e) => {
    setCompleteFilter(!completeFilter);
    if (completeFilter && incompleteFilter) setAllFilter(false);
    if (!completeFilter && incompleteFilter) setAllFilter(true);
  };

  const handleIncompletedFilter = (e) => {
    setIncompleteFilter(!incompleteFilter);
    if (completeFilter && incompleteFilter) setAllFilter(false);
    if (completeFilter && !incompleteFilter) setAllFilter(true);
  };

  const handleAllFilter = (e) => {
    setAllFilter(!allFilter);
    if (allFilter) {
      setCompleteFilter(false);
      setIncompleteFilter(false);
    } else {
      setCompleteFilter(true);
      setIncompleteFilter(true);
    }
  };

  const handleDeleteCompleted = (e) => {
    todos.forEach(todo => {
      const { id, complete } = todo;
      if (complete) removeTodo(id);
    });
  };

  const filteredTodos = (todos) => {
    let filtered = [];
    if (completeFilter && incompleteFilter) {
      filtered = todos;
    }
    else if (!completeFilter && !incompleteFilter) {
      filtered = [];
    }
    else if (!completeFilter) {
      filtered = todos.filter(todo => !todo.props.todo.complete);
    }
    else if (!incompleteFilter) {
      filtered = todos.filter(todo => todo.props.todo.complete);
    }
    return filtered;
  };

  return (
    <>
      <div className="filters">
        <FilterButton 
          text={"All"}
          checked={allFilter} 
          handler={handleAllFilter} />
        <FilterButton
          text={"Completed"}
          checked={completeFilter} 
          handler={handleCompletedFilter} />
        <FilterButton 
          text={"Incomplete"}
          checked={incompleteFilter} 
          handler={handleIncompletedFilter} />
        <DeleteCompletedButton handler={handleDeleteCompleted} />
      </div>
      <ul className="todos">
        {filteredTodos(allTodos)}
      </ul>
    </>
  );
};

export default TodosIndex;