import React, { useContext } from 'react';
import { Context } from '../../context';
import VideoPlayer from '../VideoPlayer';
import { useVideoDetails } from '../../utils/hooks/useVideoDetails';
import { getEmbeddedLink } from '../../utils/fns';
import { Container, Button } from './styled';

const VideoDetails = ({ id }) => {
  const { videoDetails } = useVideoDetails(id);
  const { dispatch } = useContext(Context);

  const goBack = () => {
    dispatch({
      type: 'CLOSE_VIDEO',
    });
  };
  return (
    <Container>
      <Button type="button" onClick={goBack}>
        Return
      </Button>
      {videoDetails ? (
        <VideoPlayer
          src={getEmbeddedLink(videoDetails.link)}
          title={videoDetails.title}
        />
      ) : (
        <p>Loading player...</p>
      )}
    </Container>
  );
};

export default VideoDetails;
