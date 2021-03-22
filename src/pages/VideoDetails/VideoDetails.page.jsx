import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import VideoPlayer from '../../components/VideoPlayer';
import SimilarVideo from '../../components/SimilarVideo';
import { useVideoDetails } from '../../utils/hooks/useVideoDetails';
import { useIsFavorite } from '../../utils/hooks/useIsFavorite';
import { useFavorites } from '../../utils/hooks/useFavorites';
import { Section, Title } from '../Home/styled';
import { storage } from '../../utils/storage';
import { FAVORITES_STORAGE_KEY } from '../../utils/constants';
import {
  Container,
  PlayerContainer,
  SimilarContainer,
  VideoTitle,
  Button,
} from './styled';

const VideoDetails = ({
  match: {
    params: { id, favorite },
  },
}) => {
  const { videoDetails, similar } = useVideoDetails(id);
  const { isFavorite, setIsFavorite } = useIsFavorite(id);
  const favorites = useFavorites(isFavorite);
  const { authenticated } = useAuth();
  const history = useHistory();

  const link = `https://www.youtube.com/embed/${id}`;

  const goBack = () => history.push('/');

  const addToFavorites = () => {
    const localFavorites = storage.get(FAVORITES_STORAGE_KEY);
    const updatedFavorites = { ...localFavorites };
    updatedFavorites[id] = videoDetails;
    storage.set(FAVORITES_STORAGE_KEY, updatedFavorites);
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    const localFavorites = storage.get(FAVORITES_STORAGE_KEY);
    const updatedFavorites = { ...localFavorites };
    updatedFavorites[id] = undefined;
    storage.set(FAVORITES_STORAGE_KEY, updatedFavorites);
    setIsFavorite(false);
  };

  return (
    <Section className="homepage">
      <Title>{isFavorite ? 'Favorite details' : 'Video details'}</Title>
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

          {authenticated && isFavorite && (
            <Button type="button" onClick={removeFromFavorites}>
              Remove from favorites
            </Button>
          )}
          {authenticated && !isFavorite && (
            <Button type="button" onClick={addToFavorites}>
              Add to favorites
            </Button>
          )}
          <Button type="button" onClick={goBack}>
            Go to Homepage
          </Button>
        </PlayerContainer>

        <SimilarContainer>
          {favorites &&
            favorite &&
            Object.values(favorites)
              .filter(({ id: { videoId } }) => videoId !== id)
              .map((item) => <SimilarVideo key={item.etag} data={item} />)}
          {similar &&
            !favorite &&
            similar.map((item) => <SimilarVideo key={item.etag} data={item} />)}
        </SimilarContainer>
      </Container>
    </Section>
  );
};

export default VideoDetails;
