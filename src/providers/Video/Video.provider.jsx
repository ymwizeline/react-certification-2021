import React, { useReducer, useEffect, createContext, useContext } from 'react';
import {
  fetchVideosAction,
  setSearchTermAction,
  setCurrentVideoAction,
} from './video.actions';
import { videoReducer, initialState } from './video.reducer';

const VideoContext = createContext(null);

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

const videoStorageKey = 'REACT-CHALLENGE-VIDEO';

export const VideoProvider = (props) => {
  const [state, dispatch] = useReducer(videoReducer, {
    ...initialState,
    video: localStorage.getItem(videoStorageKey)
      ? JSON.parse(localStorage.getItem(videoStorageKey))
      : null,
  });

  const value = {
    ...state,
    fetchVideos: fetchVideosAction(dispatch),
    setSearchTerm: setSearchTermAction(dispatch),
    setCurrentVideo: setCurrentVideoAction(dispatch),
  };

  useEffect(() => {
    if (state.video) {
      localStorage.setItem(videoStorageKey, JSON.stringify(state.video));
    } else {
      localStorage.removeItem(videoStorageKey);
    }
  }, [state.video]);

  return <VideoContext.Provider {...props} value={value} />;
};

export { useVideo };
export default VideoProvider;
