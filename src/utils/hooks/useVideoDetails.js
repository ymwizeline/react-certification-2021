import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../context';
import { storage } from '../storage';
import { FAVORITES_STORAGE_KEY } from '../constants';

export const useVideoDetails = (id) => {
  const {
    state: { videos },
  } = useContext(Context);
  const history = useHistory();
  const [videoDetails, setVideoDetails] = useState(null);
  const [similar, setSimilar] = useState(null);

  useEffect(() => {
    const data = videos.filter(({ id: { videoId } }) => id === videoId);
    if (!data.length) {
      const favorites = storage.get(FAVORITES_STORAGE_KEY);
      if (favorites && favorites[id]) setVideoDetails(favorites[id]);
      else history.push(`/`);
    } else setVideoDetails(data[0]);
  }, [videos, id, history]);

  useEffect(() => {
    const data = videos.filter(({ id: { videoId } }) => id !== videoId);
    setSimilar(data);
  }, [videos, id]);

  return { videoDetails, similar };
};
