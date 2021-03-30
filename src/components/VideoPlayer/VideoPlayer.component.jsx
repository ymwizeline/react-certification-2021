import React from 'react';
import { Container, Frame } from './styled';

const VideoPlayer = ({ src, title }) => {
  return (
    <Container>
      <Frame
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};

export default VideoPlayer;
