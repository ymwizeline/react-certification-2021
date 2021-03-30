import { useContext } from 'react';
import { Context } from '../../context';

export const useSelectVideo = (id) => {
  const { dispatch } = useContext(Context);

  const selectVideo = () => {
    dispatch({
      type: 'OPEN_VIDEO',
      payload: id,
    });
  };

  return selectVideo;
};
