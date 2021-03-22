import React from 'react';
import renderer from 'react-test-renderer';
import MenuToggle from './MenuToggle.component';
import 'jest-styled-components';

const mockDispatch = jest.fn();
const mockUseContext = jest.fn().mockImplementationOnce(() => ({
  state: { menuOpen: false },
  dispatch: mockDispatch,
}));
const realUseContext = React.useContext;

beforeAll(() => {
  React.useContext = mockUseContext;
});

afterAll(() => {
  mockDispatch.mockReset();
  mockUseContext.mockReset();
  React.useContext = realUseContext;
});

describe('MenuToggle component', () => {
  it(`renders properly`, () => {
    const element = renderer.create(<MenuToggle />).toJSON();

    expect(element).toMatchSnapshot();
  });
});
