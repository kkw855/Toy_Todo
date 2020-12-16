import { RootState } from '../../index';

export const selectTodosVisibility = (state: RootState) =>
  state.todosVisibility.visibility;
