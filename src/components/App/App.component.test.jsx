import React from 'react';
import App from './App.component'
import { render} from '@testing-library/react';

describe('App', () => {
    it('renders the app component', () => {
        const { container } = render(
            <App></App>
        );
        expect(container).toBeTruthy();
    })
})