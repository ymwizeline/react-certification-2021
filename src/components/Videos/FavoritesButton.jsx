import React from 'react'
import styled from "styled-components";
import { useFavorites } from "../../providers/Favorites/Favorites.provider";

const AddFavorite = styled.button`
    background-color: #3f51b5;
    color: white;
    border-radius: 8px;
    font-size: 13px;
    &:hover {
        background-color: white;
        color: #3f51b5;
    }
`;

const FavoritesButton = () => {
    const { favState, favDispatch } = useFavorites();
    const isFavorite = favState.favorites.find((element) => element.id.videoId === favState.currentVideo.id.videoId) ? true : false;
    const message = isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE'

    return (
        <AddFavorite onClick={ () => favDispatch({ type: message, payload: favState.currentVideo}) }>
            {isFavorite ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
        </AddFavorite>
    )
}

export default FavoritesButton;