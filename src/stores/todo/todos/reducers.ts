import { ADD_TODO, TodoActionTypes, TodoState, TOGGLE_TODO } from './types';

const initialState: TodoState = {
  todos: [],
};

const todos = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id !== action.payload
            ? todo
            : { ...todo, completed: !todo.completed },
        ),
      };
    default:
      return state;
  }
};

export default todos;
