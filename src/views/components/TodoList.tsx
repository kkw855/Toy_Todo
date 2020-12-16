import React from 'react';
import { TodoType } from '../../stores/todo/todos/types';
import Todo from './Todo';

type Props = {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <Todo
          key={id}
          text={text}
          completed={completed}
          onClick={() => toggleTodo(id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
