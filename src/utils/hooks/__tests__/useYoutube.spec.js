import React from 'react';
import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { useYoutube } from '../useYoutube';
import mockData from '../../../jsons/youtube-videos-mock.json';
import { filterByResultType } from '../../fns';

const mockItems = filterByResultType(mockData.items, 'video');

let realUseContext;
let realAxiosGet;
let mockDispatch;

beforeEach(() => {
  mockDispatch = jest.fn();
  realUseContext = React.useContext;
  React.useContext = jest.fn().mockImplementation(() => ({
    dispatch: mockDispatch,
  }));

  realAxiosGet = axios.get;
  axios.get = jest.fn().mockImplementation(() => ({
    data: { items: mockItems },
  }));
});

afterEach(() => {
  mockDispatch.mockReset();
  React.useContext = realUseContext;
  axios.get = realAxiosGet;
});

describe('useYoutube hook', () => {
  it('uses useContext React hook', () => {
    renderHook(() => useYoutube('search'));
    expect(React.useContext).toHaveBeenCalledTimes(1);
  });

  it('dispatches the LOADING_VIDEOS action first', () => {
    renderHook(() => useYoutube('search'));
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: 'LOADING_VIDEOS',
    });
  });

  it('calls the API correctly if value is received', () => {
    const search = 'search';
    renderHook(() => useYoutube(search));
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get.mock.calls[0][0]).toBe(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${search}`
    );
  });

  it('does not call the API if no value is received', () => {
    renderHook(() => useYoutube(''));
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });
});
