export default function (state, { type, payload }) {
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
    case 'CHANGE_THEME':
      return {
        ...state,
        darkModeOn: payload,
      };
    case 'OPEN_MENU':
      return {
        ...state,
        menuOpen: payload,
      };
    default:
      return state;
  }
}
