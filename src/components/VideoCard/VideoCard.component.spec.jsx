import React from 'react';
import { render } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import ContextProvider from '../../context';

const data = {
  id: { videoId: '1234' },
  snippet: {
    title: 'Mock component',
    description: 'Mock description',
    thumbnails: {
      high: {
        url: 'https://mockimage.com',
      },
    },
  },
};

describe('VideoCard component', () => {
  it('contains an image tag', () => {
    const { getByAltText } = render(
      <ContextProvider>
        <VideoCard data={data} />
      </ContextProvider>
    );

    expect(getByAltText('Mock component')).toBeTruthy();
  });

  it('contains an h2 tag', () => {
    const { getByText } = render(
      <ContextProvider>
        <VideoCard data={data} />
      </ContextProvider>
    );

    expect(getByText('Mock component').tagName).toBe('H2');
  });

  it('contains a p tag', () => {
    const { getByText } = render(
      <ContextProvider>
        <VideoCard data={data} />
      </ContextProvider>
    );

    expect(getByText('Mock description').tagName).toBe('P');
  });
});
