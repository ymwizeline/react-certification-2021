import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-relative-link'
import { useFavorites } from '../../providers/Favorites/Favorites.provider';

const Card = styled.div`
    border-radius: 8px;
    display: flex;
    height: 100px;
    position: relative;
    margin: 5px 5px 10px 8px;
    background-color: white;
`;

const Thumbnail = styled.img`
    width: 120px;
    height: 100%;
`;

const DetailsContainer = styled.div`
    height: 100%;
    -webkit-box-flex: 1;
    flex-grow: 1;
    padding: 5px;
    box-sizing: border-box;
`;

const Title = styled.p`
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 1rem;
    margin: auto;
    color: black;
`;


const Description = styled.p`
    margin: 0;
    text-align: center;
    font-size: 0.7rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: gray;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const ShortCard = ({ video }) => {
    const { favDispatch } = useFavorites();
    return (
        <Link to={`${video.id.videoId}`} onClick={() => favDispatch({ type: 'SET_CURRENT_VIDEO', payload: video})}>
            <Card>
                <Thumbnail src={video.snippet.thumbnails.default.url}></Thumbnail>
                <DetailsContainer>
                    <Title>{video.snippet.title}</Title>
                    <Description>{video.snippet.description}</Description>
                </DetailsContainer>
            </Card>
        </Link>
    )
}

export default ShortCard;