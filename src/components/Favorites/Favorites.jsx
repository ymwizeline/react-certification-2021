import React from 'react';
import styled from "styled-components";
import Detail from '../Videos/Detail';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 35px;
    margin: 55px 15px 25px 15px;

`;

const Favorites = () => {
    const { favState } = useFavorites();

    return (
        <Grid data-testid="grid">
            {favState.favorites.map((video) => {
                return (
                    <Detail key={video.id.videoId} video={video}></Detail>
                );
            })}
        </Grid>
    )
}

export default Favorites;