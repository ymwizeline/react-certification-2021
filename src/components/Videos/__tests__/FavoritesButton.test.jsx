import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritesButton from '../FavoritesButton';
import { FavoritesProvider } from '../../../providers/Favorites/Favorites.provider';
import { BrowserRouter } from 'react-router-dom';

const videos = [
    {
        "kind": "youtube#searchResult",
        "etag": "Jiak50jVoJ9_Uscl6Dwcb7VySqI",
        "id": {
        "kind": "youtube#video",
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
        "channelTitle": "Wizeline",
        "liveBroadcastContent": "none",
        "publishTime": "2019-09-30T23:54:32Z"
        }
    }
];

describe('FavoritesButton', () => {
    const favState = {favorites: videos, currentVideo: videos[0]}
    it('renders a button', () => {
        const { container } = render(
            <BrowserRouter>
                <FavoritesProvider>
                    <FavoritesButton></FavoritesButton>
                </FavoritesProvider>
            </BrowserRouter>
        );
        expect(screen.getByRole("button")).toBeDefined();
    });
    // it('Adds to favorites when button is clicked', () => {
    //     const addToFavorites = jest.fn();

    //     render(
    //         <BrowserRouter>
    //             <FavoritesProvider value={{ state }}>
    //                 <FavoritesButton onClick={addToFavorites}></FavoritesButton>
    //             </FavoritesProvider>
    //         </BrowserRouter>
    //     );

    //     const button = screen.getByRole('button');

    //     fireEvent.click(button);
    //     expect(addToFavorites).toBeCalledTimes(1);
    // })
});