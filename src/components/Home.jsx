import React from "react";
import {Stack, Box} from "@mui/material";
import Sidebar from "./Sidebar";

function Home() {
    return(
    <Stack
        sx={{ backgroundColor:"black", flexDirection: {sx:"column", md:"row", lg:"row" }, justifyContent:"space-between"}}>
        <Sidebar/>
        <Box>
            <p>FeedFeedFeedFeedFeedFeed</p>
            <p>FeedFeedFeedFeedFeedFeed</p>
            <p>FeedFeedFeedFeedFeedFeed</p>
        </Box>
        <Box>
            <p>FeedFeedFeedFeedFeedFeed</p>
            <p>FeedFeedFeedFeedFeedFeed</p>
            <p>FeedFeedFeedFeedFeedFeed</p>
        </Box>
    </Stack>
    );
}

export default Home;