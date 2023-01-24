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
            sx={{ flexDirection: {md:"row", sx: "column"}, justifyContent: "left", width:"82vw"}}>
            {videos.map((item, idx)=>
                    <Box key={idx}>
                        { item.id.videoId && <VideoCard video={item}/> }
                    </Box>
                )
            }
        </Stack>
    )
}

export default VideosFeed;