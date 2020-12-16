import React from 'react';
import TodoList from '../components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../stores/todo/todos/selectors';
import { toggleTodo } from '../../stores/todo/todos/actions';
import { selectTodosVisibility } from '../../stores/todo/visibilityFilter/selectors';
import { TodoType } from '../../stores/todo/todos/types';
import { TodoFilterType } from '../../stores/todo/visibilityFilter/types';

const getVisibleTodos = (todos: TodoType[], filter: TodoFilterType) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const VisibleTodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const visibilityFilter = useSelector(selectTodosVisibility);
  const toggle = (id: number) => dispatch(toggleTodo(id));

  return (
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      toggleTodo={toggle}
    />
  );
};

export default VisibleTodoList;
