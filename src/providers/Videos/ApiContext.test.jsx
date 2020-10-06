import React from 'react';
import { APIContextProvider } from './ApiContext'
import { render } from '@testing-library/react';

// describe('useYoutubeApi', () => ({
    
// }));

it('returns expected initial state', () => {
    const query = "Wizeline"
    const { state } = render( <APIContextProvider query={query}/>)
    //const { state } = renderHook(() => APIContextProvider("Wizeline"));
    // const { videos, searchQuery } = state

    expect(state).not.toBeDefined();

});