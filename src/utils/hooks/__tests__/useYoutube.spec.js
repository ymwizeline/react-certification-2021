import React from 'react';
import youtubeSearch from 'youtube-search';
import { renderHook } from '@testing-library/react-hooks';
import { useYoutube } from '../useYoutube';

jest.mock('youtube-search');

let realUseContext;
let useContextMock;
let mockDispatch;
beforeEach(() => {
  realUseContext = React.useContext;
  mockDispatch = jest.fn();
  useContextMock = jest.fn().mockImplementation(() => ({
    dispatch: mockDispatch,
  }));
  React.useContext = useContextMock;
});
afterEach(() => {
  useContextMock.mockReset();
  mockDispatch.mockReset();
  React.useContext = realUseContext;
});

describe('useYoutube hook', () => {
  it('uses useContext React hook', () => {
    renderHook(() => useYoutube(''));
    expect(useContextMock).toHaveBeenCalledTimes(1);
  });

  it('dispatches the LOADING_VIDEOS action first', () => {
    renderHook(() => useYoutube('search'));
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: 'LOADING_VIDEOS',
    });
  });

  it('calls the API if value is received', () => {
    renderHook(() => useYoutube('search'));
    expect(youtubeSearch).toHaveBeenCalledTimes(1);
  });

  it('does not call the API if no value is received', () => {
    renderHook(() => useYoutube(''));
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });
});
