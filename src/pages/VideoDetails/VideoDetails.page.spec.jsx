import React from 'react';
import { render } from '@testing-library/react';
import VideoDetails from './VideoDetails.component';
import ContextProvider from '../../context';
import { useVideoDetails } from '../../utils/hooks/useVideoDetails';
import mockData from '../../jsons/youtube-videos-mock.json';

const mockItem = mockData.items[1];

jest.mock('../../utils/hooks/useVideoDetails');
useVideoDetails.mockImplementation(() => ({
  videoDetails: mockItem,
}));

describe('VideoDetails component', () => {
  it('renders properly', () => {
    const { container } = render(
      <ContextProvider>
        <VideoDetails id={mockItem.id.videoId} />
      </ContextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
