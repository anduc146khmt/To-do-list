import React from 'react';
import './style.scss';
const TodoList = (props) => {
  const { todoList, onToDoClick } = props;
  const handleClick = (index) => {
    if (!onToDoClick) return;
    onToDoClick(index);
  };
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={todo.id} onClick={() => handleClick(index)}>
              {todo.data}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
