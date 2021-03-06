import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout.component';
import AuthProvider from '../../providers/Auth';
import ContextProvider from '../../context';
import 'jest-styled-components';

describe('Layout component', () => {
  it('is contained in a main tag', () => {
    const element = renderer
      .create(
        <ContextProvider>
          <AuthProvider>
            <Layout />
          </AuthProvider>
        </ContextProvider>
      )
      .toJSON();

    expect(element.type).toBe('main');
  });

  it('takes 100% of both the viewport width and height', () => {
    const element = renderer
      .create(
        <ContextProvider>
          <AuthProvider>
            <Layout />
          </AuthProvider>
        </ContextProvider>
      )
      .toJSON();

    expect(element).toHaveStyleRule('width', '100vw');
    expect(element).toHaveStyleRule('height', '100vh');
  });
});
