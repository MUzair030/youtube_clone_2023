import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Box, Stack} from "@mui/material";
import VideosFeed from "./VideosFeed";
import {fetchFromAPI} from "../utils/FetchFromAPI";
import Sidebar from "./Sidebar";

function SearchPage() {

    const { keywords } = useParams();
    const [videos, setVideos] = useState([]);

    const fetchSearchData= async ()=>{
        return await fetchFromAPI(`search?part=snippet&q=${keywords}`);
    }

    useEffect(()=>{
        fetchSearchData().then((data)=>
            setVideos(data.items)
        )
    },[keywords]);

    return(
        <Stack
            direction="column"
            sx={{flexDirection: {md:"row", sx:"column"},
            background:"black"}}>
            <Sidebar/>
            <Box>
                <VideosFeed videos={videos} searchPage={true}/>
            </Box>
        </Stack>
    );

}

export default SearchPage;