import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodosVisibility } from '../../stores/todo/visibilityFilter/selectors';
import Link from '../components/Link';
import { TodoFilterType } from '../../stores/todo/visibilityFilter/types';
import { setVisibilityFilter } from '../../stores/todo/visibilityFilter/actions';

type Props = {
  filter: TodoFilterType;
};

const FilterLink: React.FC<Props> = ({ children, filter }) => {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector(selectTodosVisibility);

  const setFilter = (filter: TodoFilterType) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <Link
      active={visibilityFilter === filter}
      onClick={() => setFilter(filter)}
    >
      {children}
    </Link>
  );
};

export default FilterLink;
