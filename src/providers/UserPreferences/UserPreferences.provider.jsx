import React, { useReducer, useEffect, createContext, useContext } from 'react';

import {
  addFavoriteVideoAction,
  removeFavoriteVideoAction,
  setInverseThemeAction,
} from './userPreferences.actions';
import { userPreferencesReducer, initialState } from './userPreferences.reducer';

const UserPreferencesContext = createContext(null);

function useUserPreferencesContext() {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

const userPreferencesStorageKey = 'REACT-CHALLENGE-USER-PREFERENCES';

function getUserStorageKey(user) {
  return user ? `${userPreferencesStorageKey}-${user.id}` : '';
}

export const UserPreferencesProvider = ({ children, user, ...otherProps }) => {
  const [state, dispatch] = useReducer(userPreferencesReducer, {
    ...initialState,
    ...(localStorage.getItem(getUserStorageKey(user))
      ? JSON.parse(localStorage.getItem(getUserStorageKey(user)))
      : {}),
  });

  function isFavoriteVideo(video) {
    return state.favoriteVideos.find((favoriteVideo) => favoriteVideo.id === video.id);
  }

  const value = {
    ...state,
    isFavoriteVideo,
    addFavoriteVideo: addFavoriteVideoAction(dispatch),
    removeFavoriteVideo: removeFavoriteVideoAction(dispatch),
    setInverseTheme: setInverseThemeAction(dispatch),
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    localStorage.setItem(
      getUserStorageKey(user),
      JSON.stringify({
        favoriteVideos: state.favoriteVideos,
        isLightTheme: state.isLightTheme,
      })
    );
  }, [state.favoriteVideos, user, state.isLightTheme]);

  function renderChildren() {
    if (typeof children === 'function') {
      return children(state);
    }
    return children;
  }

  return (
    <UserPreferencesContext.Provider {...otherProps} value={value}>
      {renderChildren()}
    </UserPreferencesContext.Provider>
  );
};

export { useUserPreferencesContext };
export default UserPreferencesProvider;
