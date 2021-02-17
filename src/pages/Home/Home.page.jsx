import React, { useRef } from 'react';
import styled from 'styled-components';
import Content from '../../components/Content';
import content from '../../jsons/youtube-videos-mock.json';

const HomeSection = styled.section`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.secondary};
`;

const Title = styled.h1`
  font-weight: 400;
  color: ${({ theme }) => theme.main};
  margin: 0 20px 20px 20px;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

function HomePage() {
  const sectionRef = useRef(null);
  const items = content.items.slice(1);

  return (
    <HomeSection className="homepage" ref={sectionRef}>
      <Title>Welcome to my challenge #1!</Title>
      <Content items={items} />
    </HomeSection>
  );
}

export default HomePage;
