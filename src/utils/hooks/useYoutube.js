import { useEffect, useContext, useState } from 'react';
import youtubeSearch from 'youtube-search';
import { Context } from '../../context';
import { filterByResultType } from '../fns';

export const useYoutube = (search) => {
  const { dispatch } = useContext(Context);
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      dispatch({
        type: 'LOADING_VIDEOS',
      });
      await youtubeSearch(
        search,
        {
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          maxResults: 24,
        },
        (err, data) => {
          if (err) setError(err);
          else setVideos(data);
        }
      );
    };
    if (search) getData();
  }, [search, dispatch]);

  useEffect(() => {
    if (videos)
      dispatch({
        type: 'VIDEOS',
        payload: filterByResultType(videos, 'video'),
      });
  }, [videos, dispatch]);

  useEffect(() => {
    if (error)
      dispatch({
        type: 'ERROR_VIDEOS',
        payload: error.message,
      });
  }, [error, dispatch]);
};
