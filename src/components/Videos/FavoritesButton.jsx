import React from 'react'
import styled from "styled-components";
import { useFavorites, FavoritesProvider } from "../../providers/Favorites/Favorites.provider";

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
    const { state, dispatch } = useFavorites();
    const isFavorite = state.favorites.find((element) => element.id.videoId == state.currentVideo.id.videoId) ? true : false;
    const message = isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE'

    return (
        <AddFavorite onClick={ () => dispatch({ type: message, payload: state.currentVideo}) }>
            {isFavorite ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
        </AddFavorite>
    )
}

export default FavoritesButton;