import { useState, useEffect } from 'react';
import { storage } from '../storage';
import { FAVORITES_STORAGE_KEY } from '../constants';

export const useFavorites = (isFavorite) => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    const localFavorites = storage.get(FAVORITES_STORAGE_KEY);
    if (localFavorites) setFavorites(localFavorites);
  }, [isFavorite]);

  return favorites;
};
