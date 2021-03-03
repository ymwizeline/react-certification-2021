import React, { useReducer, createContext } from 'react';
import reducer from './reducer';
import INITIAL_STATE from './initialState';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default ContextProvider;
