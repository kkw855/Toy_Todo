import {
  SET_VISIBILITY_FILTER,
  VisibilityActionTypes,
  VisibilityState,
} from './types';

const initialState: VisibilityState = {
  visibility: 'SHOW_ALL',
};

const visibilityFilter = (
  state = initialState,
  action: VisibilityActionTypes,
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        visibility: action.payload,
      };
    default:
      return state;
  }
};

export default visibilityFilter;
