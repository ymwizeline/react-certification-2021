import React from 'react'
import styled from "styled-components";
import { useFavorites, FavoritesProvider } from "../../providers/Favorites/Favorites.provider";

const AddFavorite = styled.button`
    background-color: #90252A;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    &:hover {
        background-color: white;
        color: #90252A;
    }
`;

const FavoritesButton = () => {
    const { state, dispatch } = useFavorites();
    const isFavorite = state.favorites.find((element) => element.id.videoId == state.currentVideo.id.videoId) ? true : false;
    const message = isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE'

    return (
        <AddFavorite onClick={ () => dispatch({ type: message, payload: state.currentVideo}) }>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </AddFavorite>
    )
}

export default FavoritesButton;