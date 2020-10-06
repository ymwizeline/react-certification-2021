import React from 'react';
import results from '../../assets/results';
import { render, screen } from '@testing-library/react';
import { APIContextProvider } from '../../providers/Videos/ApiContext';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import HomePage from './Home.page';


jest.mock('../../providers/Auth', () => ({
    useAuth: jest.fn(),
}));

describe('Homepage', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        useAuth.mockReturnValue({ authenticatated: true });
    });

    it('Renders a List of videos', () => {
        const state = { videos: results };
        render(
            <BrowserRouter>
                <APIContextProvider value={{ state }}>
                    <HomePage></HomePage>
                </APIContextProvider>
            </BrowserRouter>
        );
    expect(screen.getByTestId('grid')).toBeTruthy();

    })

})