
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useAuth } from '../../providers/Auth'

jest.mock('../../providers/Auth', () => ({
    useAuth: jest.fn(),
}));

describe('Nav', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        useAuth.mockReturnValue({ authenticatated: true });
    });

    it('renders the Nav bar', () => {
        const { container } = render(
            <BrowserRouter>
                <Nav></Nav>
            </BrowserRouter>
        );
        expect(container).toBeTruthy();
    })
})