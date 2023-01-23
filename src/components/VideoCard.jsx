import React from "react";
import {Box} from "@mui/material";

function VideoCard(props){

    const {video} = props;

    return (
        <Box
        sx={{
            height:"23vh",
            width:"19vw",
            border: "none",
            borderRadius: "30px",
            margin: "25px 0 25px"
        }}>
            <p>`${video.id.videoId}`</p>
        </Box>

    );

}

export default VideoCard;