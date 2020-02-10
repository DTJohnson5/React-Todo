import React from 'react';

const ToDo = props => {
  return (
    <div
      style={props.todo.finished ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.mission}
    </div>
  );
};

export default ToDo;