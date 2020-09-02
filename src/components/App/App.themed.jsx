import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { red } from '@material-ui/core/colors';

import { useUserPreferencesContext } from '../../providers/UserPreferences';

// A custom theme for this app
export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1C5476',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

function ThemedApp({ children }) {
  const { isLightTheme } = useUserPreferencesContext();

  console.log(isLightTheme);
  // const currentTheme = isLightTheme ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export { ThemedApp };
