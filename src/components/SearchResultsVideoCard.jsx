import React from "react";
import {Stack, Typography, Card, CardContent, CardMedia} from "@mui/material";
// import {CheckCircle} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";

function SearchResultsVideoCard(props){
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
            height:"220px",
            width: {md: "1000px", sx:"100%"},
            border: "none",
            borderRadius: "12px",
            background: "black",
            // flexDirection:"row"
        }}>


            <Link>
                <Stack
                    direction="row"
                    onClick={handleNavigate}>
                    <CardMedia
                        image={video.snippet?.thumbnails.medium.url}
                        alt={video.snippet?.title}
                        sx={{
                            height:"200px",
                            width:"350px",
                            // border: "1px",
                            borderRadius: "12px",
                        }}
                    />
                    <Stack
                        direction="column">
                        <CardContent
                            sx={{height:"12px"}}>
                            <Typography
                                variant="h1"

                                paragraph={true}
                                sx={{fontSize:"18px"}}>
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
                    </Stack>
                </Stack>
            </Link>


        </Card>

    );

}

export default SearchResultsVideoCard;