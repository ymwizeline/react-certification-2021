import React from 'react';
import styled from "styled-components";
import { Title } from './Card';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';
import FavoritesButton from './FavoritesButton';
import SideList from './SideList';
import { useAuth } from '../../providers/Auth';

const VideoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin: 135px 15px 25px 15px;
`;

const VideoPlayerContainer = styled.div`
    position: relative;
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const VideoPlayer = styled.iframe`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const VideoFooter = styled.div`
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
`;

const FooterDescription = styled.p`
    margin: 0px;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    padding: 0px 30px;
    color: #4e5052;
`;

const Player = ({ from }) => {
    const { favState } = useFavorites();
    const { authenticated } = useAuth();

    return (
        <VideoContainer>
            <VideoPlayerContainer data-testid="video-container">
                <VideoPlayer src={`https://www.youtube.com/embed/${favState.currentVideo.id.videoId}`}/>
                    <VideoFooter>
                        <Title>{favState.currentVideo.snippet.title}</Title>
                        { authenticated && <FavoritesButton/>}
                    </VideoFooter>
                    <FooterDescription>{favState.currentVideo.snippet.description}</FooterDescription>
            </VideoPlayerContainer>
            <SideList from={from}/>
        </VideoContainer>
    )

}

export default Player;