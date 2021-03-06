import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useVideoDetails } from '../useVideoDetails';
import mockData from '../../../jsons/youtube-videos-mock.json';

let realUseContext;
let useContextMock;
let mockState;
beforeEach(() => {
  realUseContext = React.useContext;
  mockState = { videos: mockData.items };
  useContextMock = jest.fn().mockImplementation(() => ({
    state: mockState,
  }));
  React.useContext = useContextMock;
});
afterEach(() => {
  useContextMock.mockReset();
  React.useContext = realUseContext;
});

describe('useVideoDetails hook', () => {
  it('uses the React useContext hook', () => {
    renderHook(() => useVideoDetails(1));
    expect(useContextMock).toHaveBeenCalledTimes(1);
  });

  it('returns the correct data', () => {
    const {
      id: { videoId: id },
    } = mockData.items[1];
    const { result } = renderHook(() => useVideoDetails(id));
    expect(result.current.videoDetails.id.videoId).toBe(id);
    expect(result.current.similar.length).toBe(mockData.items.length - 1);
  });
});
