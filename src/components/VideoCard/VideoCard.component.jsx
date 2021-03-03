import React from 'react';
import { Card, Image, Info, Title, Description } from './styled';
import { useSelectVideo } from '../../utils/hooks/useSelectVideo';
import { formatTitleWithApostrophe } from '../../utils/fns';

const VideoCard = ({ data }) => {
  const {
    id,
    title,
    description,
    thumbnails: {
      high: { url },
    },
  } = data;

  const selectVideo = useSelectVideo(id);

  return (
    <Card onClick={selectVideo}>
      <Image src={url} alt={title} />
      <Info>
        <Title>{formatTitleWithApostrophe(title)}</Title>
        <Description>{description}</Description>
      </Info>
    </Card>
  );
};

export default VideoCard;
