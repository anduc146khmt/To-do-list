import ToDoForm from 'components/TodoForm/ToDoForm';
import TodoList from 'components/TodoList/TodoList';
import React, { useState } from 'react';

function App() {
  const initialList = [
    {
      id: 0,
      data: 'ReactJS',
    },
    {
      id: 1,
      data: 'NodeJS',
    },
    {
      id: 2,
      data: 'MongoDB',
    },
  ];
  const localStorageList =
    JSON.parse(localStorage.getItem('data')) || initialList;
  const [todoList, setToDoList] = useState(localStorageList);

  const handleClickEvent = (index) => {
    let newList = [...todoList];
    newList.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(newList));
    setToDoList(newList);
  };
  const handleSubmit = (value) => {
    let newList = [...todoList];
    newList.push({
      id: newList.length + 1,
      data: value,
    });
    localStorage.setItem('data', JSON.stringify(newList));
    setToDoList(newList);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoForm
        // @ts-ignore
        onSubmit={handleSubmit}
      />
      <TodoList
        // @ts-ignore
        todoList={todoList}
        onToDoClick={handleClickEvent}
      />
    </div>
  );
}

export default App;
