import React from 'react';
import List from '../List'
import { render, screen } from '@testing-library/react';
import { FavoritesProvider } from '../../../providers/Favorites/Favorites.provider';
import { APIContextProvider } from '../../../providers/Videos/ApiContext'
import { BrowserRouter } from 'react-router-dom';

describe('List', () => {
    it('Renders a styled grid', () => {
        const state = { videos: [] };
        const { container } = render(
            <BrowserRouter>
                <APIContextProvider value={{ state }}>
                    <FavoritesProvider>
                        <List></List>
                    </FavoritesProvider>
                </APIContextProvider>
            </BrowserRouter>
        );
    expect(screen.getByTestId('grid')).toBeDefined();

    })

})