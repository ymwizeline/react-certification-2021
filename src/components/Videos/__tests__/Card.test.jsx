import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
    it('renders a Card', () => {
    const { container } = render(<Card>Hello</Card>)
        expect(container).toHaveTextContent("Hello");
    })
})