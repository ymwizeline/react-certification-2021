import { ACTIONS } from './userPreferences.actions';
import { lightTheme, darkTheme } from '../../utils/theme';

export const initialState = {
  favoriteVideos: [],
  isLightTheme: true,
  theme: lightTheme,
};

export function userPreferencesReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.ADD_FAVORITE_VIDEO:
      return {
        ...state,
        favoriteVideos: [...state.favoriteVideos, payload.video],
      };
    case ACTIONS.REMOVE_FAVORITE_VIDEO:
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter(
          (video) => video.id !== payload.video.id
        ),
      };
    case ACTIONS.SET_INVERSE_THEME:
      return {
        ...state,
        isLightTheme: !state.isLightTheme,
        theme: state.isLightTheme ? darkTheme : lightTheme,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
