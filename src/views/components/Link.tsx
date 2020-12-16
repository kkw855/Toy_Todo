import React from 'react';

type Props = {
  active: boolean;
  onClick: () => void;
};

const Link: React.FC<Props> = ({ children, active, onClick }) => (
  <button disabled={active} onClick={onClick} style={{ marginRight: '4px' }}>
    {children}
  </button>
);

export default Link;
