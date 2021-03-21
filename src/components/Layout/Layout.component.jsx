import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import { Container } from './styled';

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Menu />
      {children}
    </Container>
  );
}

export default Layout;
