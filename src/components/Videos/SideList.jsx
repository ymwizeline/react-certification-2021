import React from 'react';
import styled from 'styled-components'
import ShortCard from './ShortCard';
import { useYoutubeApi } from '../../providers/Videos/ApiContext';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';

const SideGrid = styled.div`
    width: 35%;
    height: 900px;
    overflow: scroll;
`;

const SideList = ({ from }) => {
    const { favState } = useFavorites();
    const { state} =  useYoutubeApi();

    const videos = from === 'root' ? state.videos : favState.favorites;

    return (
        <SideGrid data-testid="side-grid">
            {videos.map((video) => {
                return (
                    <ShortCard key={video.id.videoId} video={video}></ShortCard>
                );
            })}
        </SideGrid>
    ); 
}

export default SideList;