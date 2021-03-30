export default function (state, { type, payload }) {
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
    case 'CHANGE_THEME':
      return {
        ...state,
        darkModeOn: payload,
      };
    default:
      return state;
  }
}
