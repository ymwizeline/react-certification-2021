import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';

export const useVideoDetails = (id) => {
  const {
    state: { videos },
  } = useContext(Context);
  const [videoDetails, setVideoDetails] = useState(null);
  const [similar, setSimilar] = useState(null);

  useEffect(() => {
    const data = videos.filter(({ id: { videoId } }) => id === videoId);
    setVideoDetails(data[0]);
  }, [videos, id]);

  useEffect(() => {
    const data = videos.filter(({ id: { videoId } }) => id !== videoId);
    setSimilar(data);
  }, [videos, id]);

  return { videoDetails, similar };
};
