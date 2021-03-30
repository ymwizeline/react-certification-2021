import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content.component';
import mockData from '../../jsons/youtube-videos-mock.json';
import ContextProvider from '../../context';

describe('Content component', () => {
  it('maps all the elements from its items prop', () => {
    const { items } = mockData;
    const element = renderer
      .create(
        <ContextProvider>
          <Content items={items} />
        </ContextProvider>
      )
      .toJSON();

    expect(element.children.length).toBe(items.length);
  });
});
