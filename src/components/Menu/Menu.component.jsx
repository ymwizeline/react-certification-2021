import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Context } from '../../context';
import { useAuth } from '../../providers/Auth';
import { Container } from './Menu.styled';
import MenuLink from '../MenuLink';

const Menu = () => {
  const history = useHistory();

  const {
    state: { menuOpen },
  } = useContext(Context);

  const { authenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    menuOpen && (
      <Container>
        <MenuLink to="/">Home</MenuLink>
        {authenticated ? (
          <>
            <MenuLink to="/favorites">Favorites</MenuLink>
            <MenuLink to="/secret">Secret page</MenuLink>
            <MenuLink to="#" onClick={handleLogout}>
              Logout
            </MenuLink>
          </>
        ) : (
          <MenuLink to="/login">Login</MenuLink>
        )}
      </Container>
    )
  );
};

export default Menu;
