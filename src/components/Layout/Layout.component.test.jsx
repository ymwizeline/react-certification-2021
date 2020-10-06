import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

it('renders the layout', () => {
    const { container } = render(
        <Layout></Layout>
    )
    expect(screen.getAllByRole('main')).toBeDefined();
})