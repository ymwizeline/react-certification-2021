import React, { useContext } from 'react';
import { Container, Line } from './styled';
import { Context } from '../../context';

const MenuToggle = () => {
  const {
    dispatch,
    state: { menuOpen },
  } = useContext(Context);
  const openMenu = () =>
    dispatch({
      type: 'OPEN_MENU',
      payload: !menuOpen,
    });
  return (
    <Container as="div" onClick={openMenu}>
      <Line />
      <Line />
      <Line />
    </Container>
  );
};

export default MenuToggle;
