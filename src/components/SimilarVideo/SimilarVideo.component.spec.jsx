import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SimilarVideo from './SimilarVideo.component';

const props = {
  data: {
    id: { videoId: 1234 },
    snippet: {
      title: 'Video',
      thumbnails: {
        high: { url: 'imageUrl' },
      },
    },
  },
};

describe('SimilarVideo component', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <BrowserRouter>
        <SimilarVideo {...props} />
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
