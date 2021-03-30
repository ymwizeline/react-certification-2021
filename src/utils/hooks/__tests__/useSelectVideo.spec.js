import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useSelectVideo } from '../useSelectVideo';

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

describe('useSelectVideo hook', () => {
  it('uses the useContext React hook', () => {
    renderHook(() => useSelectVideo(1));
    expect(useContextMock).toHaveBeenCalledTimes(1);
  });

  it('dispatches the right action', () => {
    const id = 1;
    const { result } = renderHook(() => useSelectVideo(id));
    act(() => result.current());
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: 'OPEN_VIDEO',
      payload: id,
    });
  });
});
