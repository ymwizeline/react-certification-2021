import React, { useState, useEffect, useContext, createContext, useReducer } from 'react';

const APIContext = createContext(null);

const InitialState = {
    videos: [],
    searchQuery: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VIDEOS':
            return {
                ...state,
                videos: action.payload
            };
            case 'SET_SEARCH_QUERY':
                return {
                    ...state,
                    searchQuery: action.payload
                };
        default: 
            return state;
    }
}

export function APIContextProvider({ children, query }) {
    const [state, dispatch] = useReducer(reducer, InitialState)
    //const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        console.log("API effect", query);
        dispatch({ type: 'SET_SEARCH_QUERY', payload: query})
        const fetchData = async () => {
            try {
              const res = await fetch(`${process.env.REACT_APP_YOUTUBE_URL}${query}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
              const json = await res.json();
              console.log("json data: ", json);
              dispatch({ type: 'SET_VIDEOS', payload: json.items})
              //setIsLoading(false);
            } catch (error) {
              setError(error);
            }
          };
          fetchData();
    }, [query]);

    // console.log("loading: ", isLoading);
    // return { isLoading, results};
    console.log("state before return: ", state);
    return (
        <APIContext.Provider
          value={{ state, dispatch }}>
          {children}
        </APIContext.Provider>
    );
}

export function useYoutubeApi () {
    const context = useContext(APIContext);
    if (!context) throw new Error(`Can't use "useApi" without an ApiProvider!`);
    return context;
};
