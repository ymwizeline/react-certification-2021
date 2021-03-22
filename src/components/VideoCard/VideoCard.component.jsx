import React from 'react';
import { Card, Image, Info, Title, Description } from './styled';
import { formatTitleWithApostrophe } from '../../utils/fns';

const VideoCard = ({ data, favoriteView }) => {
  const {
    id: { videoId: id },
    snippet: {
      title,
      description,
      thumbnails: {
        high: { url },
      },
    },
  } = data;

  return (
    <Card to={`/video/${id}${favoriteView ? '/favorite' : ''}`}>
      <Image src={url} alt={title} />
      <Info>
        <Title>{formatTitleWithApostrophe(title)}</Title>
        <Description>{description}</Description>
      </Info>
    </Card>
  );
};

export default VideoCard;
