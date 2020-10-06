import React from 'react';
import SideList from '../SideList'
import { render, screen } from '@testing-library/react';
import { FavoritesProvider } from '../../../providers/Favorites/Favorites.provider';
import { APIContextProvider } from '../../../providers/Videos/ApiContext'
import { BrowserRouter } from 'react-router-dom';

describe('Side list', () => {
    it('Renders a styled grid', () => {
        const favState = { favorites: [] };
        const state = {videos: []}
        render(
            <BrowserRouter>
                <APIContextProvider value={{ state }}>
                    <FavoritesProvider>
                        <SideList></SideList>
                    </FavoritesProvider>
                </APIContextProvider>
            </BrowserRouter>
        );
    expect(screen.getByTestId('side-grid')).toBeDefined();

    })

})