import React, { useState } from 'react';
import './style.scss';
const ToDoForm = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}></input>
      </form>
    </div>
  );
};

ToDoForm.propTypes = {};

export default ToDoForm;
