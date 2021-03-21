import React from 'react';
import { Card, Thumbnail, Title } from './styled';

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

  return (
    <Card to={`/video/${id}`}>
      <Thumbnail src={url} alt={title} />
      <Title>{title}</Title>
    </Card>
  );
};

export default SimilarVideo;
