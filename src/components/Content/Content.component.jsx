import React from 'react';
import { Container } from './styled';
import VideoCard from '../VideoCard';

const Content = ({ items, favoriteView }) => {
  return (
    <Container>
      {items.map((item) => (
        <VideoCard key={item.etag} data={item} favoriteView={favoriteView} />
      ))}
    </Container>
  );
};

export default Content;
