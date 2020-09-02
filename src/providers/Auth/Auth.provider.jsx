import React, { useReducer, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { loginAction, logoutAction } from './auth.actions';
import { authReducer, initialState } from './auth.reducer';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

const authStorageKey = 'REACT-CHALLENGE-AUTH';

function AuthProvider({ children, ...otherProps }) {
  const [state, dispatch] = useReducer(authReducer, {
    ...initialState,
    user: localStorage.getItem(authStorageKey)
      ? JSON.parse(localStorage.getItem(authStorageKey))
      : null,
  });

  const value = {
    ...state,
    login: loginAction(dispatch),
    logout: logoutAction(dispatch),
    isLoggedIn: Boolean(state.user),
  };

  useEffect(() => {
    if (state.user) {
      localStorage.setItem(authStorageKey, JSON.stringify(state.user));
    } else {
      localStorage.removeItem(authStorageKey);
    }
  }, [state.user]);

  function renderChildren() {
    if (typeof children === 'function') {
      return children(state);
    }
    return children;
  }

  return (
    <AuthContext.Provider {...otherProps} value={value}>
      {renderChildren()}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useAuth };
export default AuthProvider;
