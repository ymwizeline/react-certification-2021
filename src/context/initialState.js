import mockContent from '../jsons/youtube-videos-mock.json';
import { filterByResultType } from '../utils/fns';

const data = mockContent.items;

export default {
  videos: filterByResultType(data, 'video'),
  loadingVideos: false,
  errorVideos: false,
  darkModeOn: false,
  menuOpen: false,
};
