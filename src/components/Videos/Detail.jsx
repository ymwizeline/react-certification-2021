import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Thumbnail, Title, Description } from './Card';

const Detail = ({ video }) => {
    return (
            <Card>
                <Link to={`/${video.id.videoId}`}>
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