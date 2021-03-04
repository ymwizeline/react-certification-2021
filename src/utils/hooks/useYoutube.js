import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
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
      try {
        const {
          data: { items },
        } = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${search}`
        );
        setVideos(items);
      } catch (err) {
        console.error(err);
        setError(err);
      }
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
