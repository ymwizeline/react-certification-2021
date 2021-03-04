import React, { useContext } from 'react';
import { Context } from '../../context';
import VideoPlayer from '../VideoPlayer';
import SimilarVideo from '../SimilarVideo';
import { useVideoDetails } from '../../utils/hooks/useVideoDetails';
import { Container, PlayerContainer, SimilarContainer, Title, Button } from './styled';

const VideoDetails = ({ id }) => {
  const { videoDetails, similar } = useVideoDetails(id);
  const { dispatch } = useContext(Context);

  const link = `https://www.youtube.com/embed/${id}`;

  const goBack = () => {
    dispatch({
      type: 'CLOSE_VIDEO',
    });
  };
  return (
    <Container>
      <PlayerContainer>
        {videoDetails ? (
          <>
            <VideoPlayer src={link} title={videoDetails.snippet.title} />
            <Title>{videoDetails.snippet.title}</Title>
          </>
        ) : (
          <p>Loading player...</p>
        )}

        <Button type="button" onClick={goBack}>
          Go back
        </Button>
      </PlayerContainer>

      <SimilarContainer>
        {similar && similar.map((item) => <SimilarVideo key={item.etag} data={item} />)}
      </SimilarContainer>
    </Container>
  );
};

export default VideoDetails;
