import React from 'react';
import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import { useYoutube } from '../useYoutube';
import mockData from '../../../jsons/youtube-videos-mock.json';
import { filterByResultType } from '../../fns';

const mockItems = filterByResultType(mockData.items, 'video');

let realUseContext;
let useContextMock;
let mockDispatch;
let realAxiosGet;
let axiosMock;
beforeEach(() => {
  mockDispatch = jest.fn();

  realUseContext = React.useContext;
  useContextMock = jest.fn().mockImplementation(() => ({
    dispatch: mockDispatch,
  }));
  React.useContext = useContextMock;

  realAxiosGet = axios.get;
  axiosMock = jest.fn().mockImplementation(() => ({
    data: { items: mockItems },
  }));
  axios.get = axiosMock;
});
afterEach(() => {
  mockDispatch.mockReset();
  useContextMock.mockReset();
  React.useContext = realUseContext;
  axiosMock.mockReset();
  axios.get = realAxiosGet;
});

describe('useYoutube hook', () => {
  it('uses useContext React hook', () => {
    act(() => {
      renderHook(() => useYoutube('search'));
    });
    expect(useContextMock).toHaveBeenCalledTimes(1);
  });

  it('dispatches the LOADING_VIDEOS action first', () => {
    act(() => {
      renderHook(() => useYoutube('search'));
    });
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: 'LOADING_VIDEOS',
    });
  });

  it('calls the API correctly if value is received', () => {
    const search = 'search';
    act(() => {
      renderHook(() => useYoutube(search));
    });
    expect(axiosMock).toHaveBeenCalledTimes(1);
    expect(axiosMock.mock.calls[0][0]).toBe(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${search}`
    );
  });

  it('does not call the API if no value is received', () => {
    act(() => {
      renderHook(() => useYoutube(''));
    });
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });
});
