import React from 'react';
import styled from "styled-components";
import Detail from './Detail';
import { Title } from './Card';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';
import FavoritesButton from './FavoritesButton';
//import CircularIndeterminate from '../../utils/Loading/ProgressCircle';
//import results from '../../assets/results';

const SideGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 35px;
    margin: 55px 15px 25px 15px;
`;

const VideoPlayer = styled.iframe`
    width: 100%;
    height: 500px;
    border-width: 2px;
    border-style: inset;
`;

const VideoPlayerContainer = styled.div`
    margin: 55px 15px 25px 15px;
    width: 50%;
    height: 50%;
`;

const Player = () => {
    const { state, dispatch } = useFavorites();

    return (
        <VideoPlayerContainer>
            <VideoPlayer src={`https://www.youtube.com/embed/${state.currentVideo.id.videoId}`}/>
                <Title>{state.currentVideo.snippet.title}</Title>
                <FavoritesButton/>
        </VideoPlayerContainer>
    )

}

export default Player;