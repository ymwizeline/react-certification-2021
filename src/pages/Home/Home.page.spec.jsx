import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from './Home.page';
import ContextProvider from '../../context';

describe('Home page', () => {
  it('is contained in a section tag', () => {
    const element = renderer
      .create(
        <ContextProvider>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </ContextProvider>
      )
      .toJSON();
    expect(element.type).toBe('section');
  });

  it('shows an h1 title', () => {
    const { getByText } = render(
      <ContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ContextProvider>
    );
    expect(getByText('Welcome to my challenge #3!').tagName).toBe('H1');
  });
});
