import React from 'react';
import { Link } from 'react-router-relative-link';
import { Card, CardBody, Thumbnail, Title, Description } from './Card';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';

const Detail = ({ video }) => {
    const { favDispatch } = useFavorites();
    return (
        <Link key={video.id.videoId} to={`${video.id.videoId}`} onClick={() => favDispatch({ type: 'SET_CURRENT_VIDEO', payload: video})}>
            <Card>
                <Thumbnail src={video.snippet.thumbnails.medium.url}></Thumbnail>
                <CardBody>
                    <Title>{video.snippet.title}</Title>
                    <Description>{video.snippet.description}</Description>
                </CardBody>
            </Card>
        </Link>
    );
};

export default Detail;