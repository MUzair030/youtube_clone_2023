import React from "react";
import {IconButton, Paper, Stack} from "@mui/material";
import {Link} from "react-router-dom";
// import {logo} from "../utils/constants";
// import "../assets/yotube.PNG";
import SearchBar from "./SearchBar";
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
    return (
        <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx = {{background:"black", justifyContent:"space-between", padding:"10px", overflow: "hidden", width:"100%", height:"50px",
            position: "sticky", top: "0vh", float:"top"}}>
            <div
                style={{display:"flex", alignItems:"center", flexBasis:"20%" }}>
                <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='menu'>
                    <MenuIcon/>
                </IconButton>
                <Link to="/" >
                    <img src={require("../assets/yotube.PNG")} height={40} alt="logo" />
                </Link>
            </div>
            <SearchBar/>
            <div
                style={{display:"flex", alignItems:"center", flexBasis:"10%" }}>
                <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='video'>
                    <VideoCallIcon/>
                </IconButton>
                <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='notification'>
                    <NotificationsNoneIcon/>
                </IconButton>
                <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='account'>
                    <AccountCircleIcon/>
                </IconButton>

            </div>


        </Stack>
    );
}

export default Navbar;
