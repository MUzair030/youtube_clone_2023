import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import {Stack, Typography, Paper} from "@mui/material";
import { useParams } from "react-router-dom";
import {fetchChannelDetailsAPI, fetchSuggestedVideosAPI, fetchVideoDetailsAPI} from "../utils/FetchFromAPI";
import VideosFeed from "./VideosFeed";
import baseStyles from "../index.css"

function VideoPage() {

    const {id} = useParams();
    const [videoURL, setVideoURL] = useState('');
    const [videoDetails, setVideoDetails] = useState('');
    const [channelDetails, setChannelDetails] = useState('');
    const [suggestedVideos, setSuggestedVideos] = useState([]);

    const getSuggestedVideos= async ()=>{
        return await fetchSuggestedVideosAPI(id);
    }
    const getVideoDetails= async ()=>{
        return await fetchVideoDetailsAPI(id);
    }
    const getChannelDetails = async ()=>{
        return await fetchChannelDetailsAPI(videoDetails?.snippet?.channelId);
    }

    useEffect(()=>{
        setVideoURL(`https://www.youtube.com/watch?v=${id}`);
        getVideoDetails().then((data)=>{
            setVideoDetails(data.items[0]);
        });
        getSuggestedVideos().then((data)=> {
            setSuggestedVideos(data.items)
        });
    },[id]);

    useEffect(()=>{
        getChannelDetails().then((data)=>{
            console.log("data.items  ", data.items)
            setChannelDetails(data.items[0]);
        });
    },[videoDetails]);

    return(
        <Stack
            direction="row"
            sx={{width:"100vw", height:"100vh", marginTop:"2vh", overflowY: "auto"}}
            ml={7}>

            <Stack
                sx={{width:"60vw", height:"100vh"}}>
                <ReactPlayer
                    className='react-player'
                    url={videoURL}
                    width='100%'
                    height='75%'
                    controls
                />
                <Typography sx={{fontSize:"22px"}}>
                    {videoDetails?.snippet?.title}
                </Typography>
                <Stack direction="row" sx={{paddingTop:"20px"}}>
                        <img className={baseStyles.avatar}  height="50px" width="50px"
                             src={channelDetails?.snippet?.thumbnails?.default?.url } />
                    <Stack direction="column" pl={2}>
                        <Typography sx={{fontSize:"14px"}}>
                            {videoDetails?.snippet?.channelTitle}
                        </Typography>
                        <Typography sx={{fontSize:"12px", color:"gray"}}>
                            {channelDetails?.statistics?.subscriberCount} subscribers
                        </Typography>
                    </Stack>
                    <Typography>
                        {videoDetails?.statistics?.likeCount} likes
                    </Typography>

                </Stack>

                <Typography>
                    {videoDetails?.statistics?.viewCount} views
                </Typography>
                <Typography>
                    {videoDetails?.snippet?.publishedAt}
                </Typography>

            </Stack>

            <Stack
                direction="column"
                sx={{width:"30vw", height:"100vh"}}>
                <VideosFeed suggestedVideos={true} videos={suggestedVideos}/>
            </Stack>

        </Stack>
    );
}

export default VideoPage;