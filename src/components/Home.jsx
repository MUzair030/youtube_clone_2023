import React, {useEffect, useState} from "react";
import {Stack, Box} from "@mui/material";
import Sidebar from "./Sidebar";
import VideosFeed from "./VideosFeed";
import {fetchFromAPI} from "../utils/FetchFromAPI";

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('Home');
    const [videos, setVideos] = useState([]);

    const fetchFeedData=async () =>{
    return await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    }


    useEffect(()=>{
        fetchFeedData().then((data)=>{
            setVideos(data.items);
        })

        // console.log((items))
    }, [selectedCategory]);


    return(
    <Stack
        sx={{ backgroundColor:"black", flexDirection: {sx:"column", md:"row", lg:"row" }, justifyContent:"left"}}>
        <Sidebar selectedCategory={selectedCategory}
                 setSelectedCategory={setSelectedCategory} />
        <Box>
            <VideosFeed videos={videos}/>
        </Box>
    </Stack>
    );
}

export default Home;