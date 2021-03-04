import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.component';
import AuthProvider from '../../providers/Auth';
import ContextProvider from '../../context';

describe('Header component', () => {
  it('is contained in a nav tag', () => {
    const element = renderer
      .create(
        <ContextProvider>
          <AuthProvider>
            <Header />
          </AuthProvider>
        </ContextProvider>
      )
      .toJSON();

    expect(element.type).toBe('nav');
  });

  it('contains 2 children containing each 2 children', () => {
    const element = renderer
      .create(
        <ContextProvider>
          <AuthProvider>
            <Header />
          </AuthProvider>
        </ContextProvider>
      )
      .toJSON();

    expect(element.children.length).toBe(2);
    expect(element.children[0].children.length).toBe(2);
    expect(element.children[1].children.length).toBe(2);
  });
});
