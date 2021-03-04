import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from './Home.page';
import ContextProvider from '../../context';

describe('Home page', () => {
  it('is contained in a section tag', () => {
    const element = renderer
      .create(
        <ContextProvider>
          <Home />
        </ContextProvider>
      )
      .toJSON();
    expect(element.type).toBe('section');
  });

  it('shows an h1 title', () => {
    const { getByText } = render(
      <ContextProvider>
        <Home />
      </ContextProvider>
    );
    expect(getByText('Welcome to my challenge #3!').tagName).toBe('H1');
  });
});
