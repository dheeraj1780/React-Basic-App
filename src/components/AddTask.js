import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ user, onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    const formattedDate = day ? day.toLocaleDateString() : null;
    onAdd({user} , { text, day: formattedDate });

    setText('');
    setDay(null);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day and Time</label>
        <DatePicker
          selected={day}
          onChange={(date) => setDay(date)}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
