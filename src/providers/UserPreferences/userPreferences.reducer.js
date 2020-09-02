import { ACTIONS } from './userPreferences.actions';

export const initialState = {
  favoriteVideos: [],
  isLightTheme: true,
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
        isLightTheme: payload,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
