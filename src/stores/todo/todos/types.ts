export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoState = {
  todos: TodoType[];
};

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: TodoType;
};

type ToggleTodoAction = {
  type: typeof TOGGLE_TODO;
  payload: number;
};

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
