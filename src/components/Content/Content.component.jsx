import React from 'react';
import { Container } from './styled';
import VideoCard from '../VideoCard';

const Content = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <VideoCard key={item.id || item.publishedAt} data={item} />
      ))}
    </Container>
  );
};

export default Content;
