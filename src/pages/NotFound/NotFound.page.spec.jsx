import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './NotFound.page';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound component', () => {
  it('renders properly', () => {
    const element = renderer
      .create(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      .toJSON();

    expect(element).toMatchSnapshot();
  });
});
