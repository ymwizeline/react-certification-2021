import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Content = ({ items }) => {
  return (
    <StyledContent>
      {items.map((item) => (
        <VideoCard key={item.etag} data={item} />
      ))}
    </StyledContent>
  );
};

export default Content;
