import React from 'react';
import styled from 'styled-components'
import ShortCard from './ShortCard';
import { useYoutubeApi } from '../../providers/Videos/ApiContext';

const SideGrid = styled.div`
    width: 35%;
    height: 900px;
    overflow: scroll;
`;

const SideList = () => {
    const { state, dispatch } = useYoutubeApi();
    return (
        <SideGrid>
            {state.videos.map((video) => {
                return (
                    <ShortCard video={video}></ShortCard>
                );
            })}
        </SideGrid>
    ); 
}

export default SideList;