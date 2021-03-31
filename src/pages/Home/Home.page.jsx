import React, { useRef, useContext } from 'react';
import { Context } from '../../context';
import { Section, Title } from './styled';
import Content from '../../components/Content';

function HomePage() {
  const sectionRef = useRef(null);
  const {
    state: { videos, loadingVideos, errorVideos },
  } = useContext(Context);

  return (
    <Section className="homepage" ref={sectionRef}>
      <Title>Welcome to my final challenge!</Title>
      {errorVideos && <p style={{ color: 'red' }}>{errorVideos}</p>}
      {loadingVideos ? <p>Loading videos...</p> : <Content items={videos} />}
    </Section>
  );
}

export default HomePage;
