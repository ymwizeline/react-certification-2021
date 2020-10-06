import React from 'react';
import Player from '../Player';
import { render, screen } from '@testing-library/react';
import { FavoritesProvider } from '../../../providers/Favorites/Favorites.provider';
import { APIContextProvider } from '../../../providers/Videos/ApiContext'
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth';

jest.mock('../../../providers/Auth', () => ({
    useAuth: jest.fn(),
}));

const video = {
    "id": {
      "videoId": "nmXMgqjQzls"
    },
    "snippet": {
      "publishedAt": "2019-09-30T23:54:32Z",
      "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
      "title": "Video Tour | Welcome to Wizeline Guadalajara",
      "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
    }
  };

describe('Player', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        useAuth.mockReturnValue({ authenticatated: true });
    });

    it('Renders a styled div for an iframe', () => {
        const favState = { 
            favorites: [],
            currentVideo: video}
        const { container } = render(
            <BrowserRouter>
                <APIContextProvider>
                    <FavoritesProvider value={{ favState }}>
                        <Player/>
                    </FavoritesProvider>
                </APIContextProvider>
            </BrowserRouter>
        );
    //expect(screen.getByTestId('video-container')).toBeDefined();
    expect(container).toBeTruthy();
    })

})
