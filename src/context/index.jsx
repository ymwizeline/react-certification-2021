import React, { useReducer, createContext } from 'react';
import mockContent from '../jsons/youtube-videos-mock-2.json';

export const Context = createContext();

const data = mockContent.items;

const INITIAL_STATE = {
  videos: data,
  loadingVideos: false,
  errorVideos: false,
  videoSelected: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOADING_VIDEOS':
      return {
        ...state,
        loadingVideos: true,
        errorVideos: false,
        videoSelected: null,
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
    case 'OPEN_VIDEO':
      return {
        ...state,
        videoSelected: payload,
      };
    case 'CLOSE_VIDEO':
      return {
        ...state,
        videoSelected: null,
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
