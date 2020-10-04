import React from 'react';
import styled from "styled-components";
import Detail from './Detail';
import { useYoutubeApi } from '../../providers/Videos/ApiContext';
//import CircularIndeterminate from '../../utils/Loading/ProgressCircle';
//import results from '../../assets/results';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 35px;
    margin: 55px 15px 25px 15px;

`;

const List = () => {
    const { state, dispatch } = useYoutubeApi();
    
    console.log("state in list: ", state)
    return (
        <Grid>
            {state.videos.map((video) => {
                return (
                    <Detail key={video.id.videoId} video={video}/>
                );
            })}
        </Grid>
    )
}

export default List;