import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../stores/todo/todos/actions';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onSubmit}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
