import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar.component';
import ContextProvider from '../../context';
import 'jest-styled-components';

describe('SearchBar component', () => {
  it(`renders properly`, () => {
    const element = renderer
      .create(
        <ContextProvider>
          <SearchBar />
        </ContextProvider>
      )
      .toJSON();

    expect(element).toMatchSnapshot();
  });
});
