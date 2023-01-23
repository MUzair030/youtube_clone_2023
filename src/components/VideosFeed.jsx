import React from "react";
import {Stack, Box} from "@mui/material";
import VideoCard from "./VideoCard";

function VideosFeed(props){
    const {videos} = props;

    return(
        <Stack
            direction="column"
            flexWrap="wrap"
            gap={2}
            sx={{ flexDirection: "row", justifyContent: "left", width:"82vw"}}>
            {videos.map((item, idx)=>
                    <Box key={idx}>
                        <VideoCard video={item} />
                        { item.id.videoId && <VideoCard video={item}/> }
                    </Box>
                )
            }
        </Stack>
    )
}

export default VideosFeed;