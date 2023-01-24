import React from "react";
import {Box, Typography, Card, CardContent, CardMedia} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";

function VideoCard(props){
    const {video} = props;
    const navigate = useNavigate();

    const handleNavigate=(e)=>{
        e.preventDefault();
        if (video) {
            navigate(`/video/${video.id.videoId}`);
        }
    };

    return (

        <Card
            onClick={handleNavigate}
            sx={{
            height:"300px",
            width: {md: "300px", sx:"100%"},
            border: "none",
            borderRadius: "12px",
            background: "black"
        }}>
            <Link>
                <CardMedia
                    image={video.snippet?.thumbnails.medium.url}
                    alt={video.snippet?.title}
                    sx={{
                        height:"180px",
                        width:"280px",
                        // border: "1px",
                        borderRadius: "12px",
                    }}
                />
            </Link>

            <CardContent
                sx={{height:"12px"}}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        paragraph={true}
                        sx={{fontSize:"14px", height:"10px"}}>
                        {video.snippet?.title.slice(0,60)}
                    </Typography>
            </CardContent>
            <CardContent>
                <Typography
                    variant="subtitle1"
                    paragraph={true}
                    sx={{fontSize:"12px", color:"gray"}}>
                    {video.snippet?.channelTitle.slice(0,60)}
                </Typography>
            </CardContent>
        </Card>
        // <Box
        // sx={{
        //     height:"23vh",
        //     width:"19vw",
        //     border: "none",
        //     borderRadius: "30px",
        //     margin: "25px 0 25px"
        // }}>
        //     <p>`${video.id.videoId}`</p>
        // </Box>

    );

}

export default VideoCard;