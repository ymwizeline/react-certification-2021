import { useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context';
import { filterByResultType } from '../fns';

export const useYoutube = (search) => {
  const { dispatch } = useContext(Context);

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
        dispatch({
          type: 'VIDEOS',
          payload: filterByResultType(items, 'video'),
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: 'ERROR_VIDEOS',
          payload: error.message,
        });
      }
    };
    if (search) getData();
  }, [search, dispatch]);
};
