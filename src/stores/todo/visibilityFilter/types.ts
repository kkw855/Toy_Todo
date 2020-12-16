export type TodoFilterType = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export type VisibilityState = {
  visibility: TodoFilterType;
};

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

type SetVisibilityFilterAction = {
  type: typeof SET_VISIBILITY_FILTER;
  payload: TodoFilterType;
};

export type VisibilityActionTypes = SetVisibilityFilterAction;
