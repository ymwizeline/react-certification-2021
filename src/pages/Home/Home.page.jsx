import React, { useRef, useContext } from 'react';
import { Context } from '../../context';
import { Section, Title } from './styled';
import Content from '../../components/Content';
import VideoDetails from '../../components/VideoDetails';

function HomePage() {
  const sectionRef = useRef(null);
  const {
    state: { videos, loadingVideos, errorVideos, videoSelected },
  } = useContext(Context);

  if (videoSelected)
    return (
      <Section className="homepage" ref={sectionRef}>
        <Title>Video details</Title>
        <VideoDetails id={videoSelected} />
      </Section>
    );

  return (
    <Section className="homepage" ref={sectionRef}>
      <Title>Welcome to my challenge #3!</Title>
      {errorVideos && <p style={{ color: 'red' }}>{errorVideos}</p>}
      {loadingVideos ? <p>Loading videos...</p> : <Content items={videos} />}
    </Section>
  );
}

export default HomePage;
