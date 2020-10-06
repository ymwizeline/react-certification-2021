import React from 'react';
import Favorites from './Favorites'
import { render, screen } from '@testing-library/react';
import { FavoritesProvider } from '../../providers/Favorites/Favorites.provider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';


jest.mock('../../providers/Auth', () => ({
    useAuth: jest.fn(),
}));

describe('Favorites', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        useAuth.mockReturnValue({ authenticatated: true });
    });

    it('Renders a styled grid', () => {
        const state = { favorites: [] };
        render(
            <BrowserRouter>
                <FavoritesProvider value={{ state }}>
                    <Favorites></Favorites>
                </FavoritesProvider>
            </BrowserRouter>
        );
    expect(screen.getByTestId('grid')).toBeDefined();

    })

})