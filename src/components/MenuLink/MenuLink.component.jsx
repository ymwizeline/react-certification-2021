import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context';

const MenuLink = ({ children, ...props }) => {
  const { dispatch } = useContext(Context);

  const closeMenu = () => dispatch({ type: 'OPEN_MENU', payload: false });

  return (
    <Link onClick={closeMenu} {...props}>
      {children}
    </Link>
  );
};

export default MenuLink;
