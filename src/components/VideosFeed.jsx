import React from "react";
import {Stack, Box} from "@mui/material";
import VideoCard from "./VideoCard";
import SearchResultsVideoCard from "./SearchResultsVideoCard";
import SuggestedVideosCard from "./SuggestedVideosCard";

function VideosFeed(props){
    const {videos} = props;
    const {searchPage, suggestedVideos} = props;
    console.log(searchPage);

    return(
        searchPage?
        <Stack
            direction="column"
            // flexWrap="wrap"
            // gap={2}
            ml={15}
            sx={{ justifyContent: "left", width:"82vw"}}>
            {videos.map((item, idx)=>
                item?.id?.videoId &&
                <Box key={idx}>
                    <SearchResultsVideoCard video={item}/>
                </Box>
            )
            }
        </Stack>
        :
        suggestedVideos?
            <Stack
                direction="column"
                flexWrap="wrap"
                gap={1}
                sx={{justifyContent: "left", width:"20vw", margin:"0 0 0 30px"}}>
                {videos.map((item, idx)=>
                    item?.id?.videoId &&
                    <Box key={idx}>
                        <SuggestedVideosCard video={item}/>
                    </Box>
                )
                }
            </Stack>
        :
            <Stack
                direction="column"
                flexWrap="wrap"
                gap={2}
                sx={{ flexDirection: {md:"row", sx: "column"}, justifyContent: "left", width:"82vw"}}>
                {videos.map((item, idx)=>
                    item?.id?.videoId &&
                    <Box key={idx}>
                        <VideoCard video={item}/>
                    </Box>
                )
                }
            </Stack>


    )
}

export default VideosFeed;