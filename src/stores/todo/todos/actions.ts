import { ADD_TODO, TodoActionTypes, TOGGLE_TODO } from './types';

let nextTodoId = 0;

export const addTodo = (text: string): TodoActionTypes => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    completed: false,
    text,
  },
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});
