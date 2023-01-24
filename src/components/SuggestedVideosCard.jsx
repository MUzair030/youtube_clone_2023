import React from "react";
import {Stack, Typography, Card, CardContent, CardMedia} from "@mui/material";
// import {CheckCircle} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";

function SuggestedVideosCard(props){
    const {video} = props;
    const navigate = useNavigate();

    const handleNavigate=(e)=>{
        e.preventDefault();
        if (video) {
            navigate(`/video/${video.id.videoId}`);
        }
    };

    return (

        <Card sx={{
            height:"100px",
            width: {md: "430px", sx:"100%"},
            border: "none",
            borderRadius: "12px",
            background: "black",
            // flexDirection:"row"
        }}>


                <Stack
                    direction="row"
                    onClick={handleNavigate}>
                    <CardMedia
                        image={video.snippet?.thumbnails.medium.url}
                        alt={video.snippet?.title}
                        sx={{
                            height:"100px",
                            width:"160px",
                            // border: "1px",
                            borderRadius: "12px",
                        }}
                    />

                    <Stack
                        direction="column"
                        pl={2}
                        pt={0.2}>
                        <CardContent
                            sx={{height:"auto", margin:"0", padding:"0"}}>
                            <Typography
                                variant="h1"
                                sx={{fontSize:"14px"}}>
                                {video.snippet?.title.slice(0,40)}
                            </Typography>
                        </CardContent>
                        <CardContent
                            sx={{height:"auto", margin:"0", padding:"0"}}>
                            <Typography
                                variant="subtitle1"
                                sx={{fontSize:"10px", color:"gray"}}>
                                {video.snippet?.channelTitle.slice(0,30)}
                            </Typography>
                        </CardContent>
                    </Stack>

                </Stack>


        </Card>

    );

}

export default SuggestedVideosCard;