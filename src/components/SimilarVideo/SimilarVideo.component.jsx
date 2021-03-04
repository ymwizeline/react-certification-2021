import React from 'react';
import { Card, Thumbnail, Title } from './styled';
import { useSelectVideo } from '../../utils/hooks/useSelectVideo';

const SimilarVideo = ({ data }) => {
  const {
    id: { videoId: id },
    snippet: {
      title,
      thumbnails: {
        high: { url },
      },
    },
  } = data;

  const selectVideo = useSelectVideo(id);

  return (
    <Card onClick={selectVideo}>
      <Thumbnail src={url} alt={title} />
      <Title>{title}</Title>
    </Card>
  );
};

export default SimilarVideo;
