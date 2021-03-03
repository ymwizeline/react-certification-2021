import { useEffect, useContext } from 'react';
import youtubeSearch from 'youtube-search';
import { Context } from '../../context';
import { filterByResultType } from '../fns';

export const useYoutube = (search) => {
  const { dispatch } = useContext(Context);

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
        (error, data) => {
          if (error)
            dispatch({
              type: 'ERROR_VIDEOS',
              payload: error.message,
            });
          else {
            dispatch({
              type: 'VIDEOS',
              payload: filterByResultType(data, 'video'),
            });
          }
        }
      );
    };
    if (search) getData();
  }, [search, dispatch]);
};
