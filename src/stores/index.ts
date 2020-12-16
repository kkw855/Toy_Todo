import { combineReducers } from 'redux';
import todos from './todo/todos/reducers';
import todosVisibility from './todo/visibilityFilter/reducers';

const rootReducer = combineReducers({
  todos,
  todosVisibility,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
