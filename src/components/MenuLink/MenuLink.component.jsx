import React, { useContext } from 'react';

import { Context } from '../../context';
import { Go } from './styled';

const MenuLink = ({ children, ...props }) => {
  const { dispatch } = useContext(Context);

  const closeMenu = () => dispatch({ type: 'OPEN_MENU', payload: false });

  return (
    <Go onClick={closeMenu} {...props}>
      {children}
    </Go>
  );
};

export default MenuLink;
