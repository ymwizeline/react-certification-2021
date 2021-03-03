import React, { useContext } from 'react';
import { Card, Image, Info, Title, Description } from './styled';
import { formatTitleWithApostrophe } from '../../utils/fns';
import { Context } from '../../context';

const VideoCard = ({ data }) => {
  const {
    id,
    title,
    description,
    thumbnails: {
      high: { url },
    },
  } = data;

  const { dispatch } = useContext(Context);

  const openVideoModal = (videoId) => {
    dispatch({
      type: 'OPEN_VIDEO',
      payload: videoId,
    });
  };

  return (
    <Card onClick={() => openVideoModal(id)}>
      <Image src={url} alt={title} />
      <Info>
        <Title>{formatTitleWithApostrophe(title)}</Title>
        <Description>{description}</Description>
      </Info>
    </Card>
  );
};

export default VideoCard;
