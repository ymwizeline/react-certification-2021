import React, { useReducer, useContext} from 'react';

const FavoritesContext = React.createContext(null);

const InitialState = {
    favorites: [],
    currentVideo: {}
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_FAVORITE': 
            return {
                ...state, 
                favorites: [action.payload, ...state.favorites]
            };
        case 'REMOVE_FAVORITE': 
            const favorites = state.favorites.filter(
                (favorite) => favorite.id.videoId !== action.payload.id.videoId
            );
            return {
                ...state,
                favorites
            };
        case 'SET_CURRENT_VIDEO':
            return {
                ...state,
                currentVideo: action.payload
            }
        default:
            return state;
    }
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error(`Can't use "useFavorites" without a FavoritesProvider!`);
    return context;
}

export const FavoritesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, InitialState);

    return (
        <FavoritesContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoritesContext.Provider>
    );
}
