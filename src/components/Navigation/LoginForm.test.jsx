
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useAuth } from '../../providers/Auth'

jest.mock('../../providers/Auth', () => ({
    useAuth: jest.fn(),
}));

describe('loginForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        useAuth.mockReturnValue({ authenticatated: true });
    });

    it('renders login form', () => {
        const { container } = render(
            <LoginForm></LoginForm>
        )
        expect(container).toBeTruthy();
    });
    // it('log in button exists', () => {
    //     const clickLogin = jest.fn();
    //     render(
    //         <LoginForm></LoginForm>
    //     );

    //     expect(screen.findByTestId('login')).toBeTruthy();
    //     // const button = screen.findByTestId('login');
    //     // button.onClick = jest.fn();


    // });

})