import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Context } from '../../context';
import theme from '../../theme';

const Provider = ({ children }) => {
  const {
    state: { darkModeOn },
  } = useContext(Context);
  const themeUsed = darkModeOn ? theme.dark : theme.clear;

  return <ThemeProvider theme={themeUsed}>{children}</ThemeProvider>;
};

export default Provider;
