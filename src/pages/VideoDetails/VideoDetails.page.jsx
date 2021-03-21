import React from 'react';
import { useHistory } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';
import SimilarVideo from '../../components/SimilarVideo';
import { useVideoDetails } from '../../utils/hooks/useVideoDetails';
import { Section, Title } from '../Home/styled';
import {
  Container,
  PlayerContainer,
  SimilarContainer,
  VideoTitle,
  Button,
} from './styled';

const VideoDetails = ({
  match: {
    params: { id },
  },
}) => {
  const { videoDetails, similar } = useVideoDetails(id);
  const history = useHistory();

  const link = `https://www.youtube.com/embed/${id}`;

  const goBack = () => history.push('/');

  return (
    <Section className="homepage">
      <Title>Video details</Title>
      <Container>
        <PlayerContainer>
          {videoDetails ? (
            <>
              <VideoPlayer src={link} title={videoDetails.snippet.title} />
              <VideoTitle>{videoDetails.snippet.title}</VideoTitle>
            </>
          ) : (
            <p>Loading player...</p>
          )}

          <Button type="button" onClick={goBack}>
            Go to Homepage
          </Button>
        </PlayerContainer>

        <SimilarContainer>
          {similar && similar.map((item) => <SimilarVideo key={item.etag} data={item} />)}
        </SimilarContainer>
      </Container>
    </Section>
  );
};

export default VideoDetails;
