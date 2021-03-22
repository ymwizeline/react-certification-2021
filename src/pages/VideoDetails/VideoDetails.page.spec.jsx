import React from 'react';
import { render } from '@testing-library/react';
import VideoDetails from './VideoDetails.page';
import ContextProvider from '../../context';
import AuthProvider from '../../providers/Auth';
import { useVideoDetails } from '../../utils/hooks/useVideoDetails';
import mockData from '../../jsons/youtube-videos-mock.json';

const mockItem = mockData.items[1];

jest.mock('../../utils/hooks/useVideoDetails');
useVideoDetails.mockImplementation(() => ({
  videoDetails: mockItem,
}));

const props = { match: { params: { id: mockItem.id.videoId } } };

describe('VideoDetails component', () => {
  it('renders properly', () => {
    const { container } = render(
      <ContextProvider>
        <AuthProvider>
          <VideoDetails {...props} />
        </AuthProvider>
      </ContextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
