import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';

export const useVideoDetails = (videoId) => {
  const {
    state: { videos },
  } = useContext(Context);
  const [videoDetails, setVideoDetails] = useState(null);
  const [similar, setSimilar] = useState(null);

  useEffect(() => {
    const data = videos.filter(({ id }) => id === videoId);
    setVideoDetails(data[0]);
  }, [videos, videoId]);

  useEffect(() => {
    const data = videos.filter(({ id }) => id !== videoId);
    setSimilar(data);
  }, [videos, videoId]);

  return { videoDetails, similar };
};
