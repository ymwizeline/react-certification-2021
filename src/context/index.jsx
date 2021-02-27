import React, { useReducer, createContext } from 'react';
import mockContent from '../jsons/youtube-videos-mock.json';

export const Context = createContext();

const data = mockContent.items.map((item) => item.snippet).slice(1);

const INITIAL_STATE = {
  videos: data,
  loadingVideos: false,
  errorVideos: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOADING_VIDEOS':
      return {
        ...state,
        loadingVideos: true,
        errorVideos: false,
      };
    case 'VIDEOS':
      return {
        ...state,
        videos: payload,
        loadingVideos: false,
        errorVideos: false,
      };
    case 'ERROR_VIDEOS':
      return {
        ...state,
        loadingVideos: false,
        errorVideos: `Error while loading the videos (${payload}). Please try again later.`,
      };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default ContextProvider;
