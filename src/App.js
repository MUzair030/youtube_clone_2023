import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ChannelDetailsPage, Home, Navbar, SearchPage, VideoPage} from "./components";
import {Box} from "@mui/material";
import baseStyles from "./index.css"

const App = () => (
    <BrowserRouter>
        <Box className="baseStyles" sx={{ backgroundColor: "black", padding:'0', margin:"0",  height:"100vh" }}>
            <Navbar />
            <Routes>7
                <Route path="/" exact element={<Home />} />
                <Route path="/video/:id" element={<VideoPage />} />
                <Route path="/channel/:id" element={<ChannelDetailsPage />} />
                <Route path="/search/:keywords" element={<SearchPage />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;