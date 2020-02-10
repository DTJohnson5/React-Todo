// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import ToDo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(todo => (
        <ToDo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;