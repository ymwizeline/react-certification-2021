import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Thumbnail, Title, Description } from './Card';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';

const Detail = ({ video }) => {
    const { state, dispatch } = useFavorites();
    return (
            <Card>
                <Link to={`/${video.id.videoId}`} onClick={() => dispatch({ type: 'SET_CURRENT_VIDEO', payload: video})}>
                    <Thumbnail src={video.snippet.thumbnails.medium.url}></Thumbnail>
                </Link>
                <CardBody>
                    <Title>{video.snippet.title}</Title>
                    <Description>{video.snippet.description}</Description>
                </CardBody>
            </Card>
    );
};

export default Detail;