import {
  TodoFilterType,
  SET_VISIBILITY_FILTER,
  VisibilityActionTypes,
} from './types';

export const setVisibilityFilter = (
  filter: TodoFilterType,
): VisibilityActionTypes => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter,
});
