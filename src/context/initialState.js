import mockContent from '../jsons/youtube-videos-mock-2.json';

const data = mockContent.items;

export default {
  videos: data,
  loadingVideos: false,
  errorVideos: false,
  videoSelected: null,
};
