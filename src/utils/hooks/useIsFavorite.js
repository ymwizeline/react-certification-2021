import { useState, useEffect } from 'react';
import { FAVORITES_STORAGE_KEY } from '../constants';
import { storage } from '../storage';

export const useIsFavorite = (videoId) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = storage.get(FAVORITES_STORAGE_KEY);
    if (favorites && favorites[videoId]) setIsFavorite(true);
    else setIsFavorite(false);
  }, [videoId]);

  return { isFavorite, setIsFavorite };
};
