import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer: React.FC = () => {
  return (
    <>
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </>
  );
};

export default Footer;
