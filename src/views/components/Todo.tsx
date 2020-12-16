import React from 'react';
import { TodoType } from '../../stores/todo/todos/types';

type Props = {
  text: string;
  completed: boolean;
  onClick: () => void;
};

const Todo: React.FC<Props> = ({ text, completed, onClick }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={onClick}
  >
    {text}
  </li>
);

export default Todo;
