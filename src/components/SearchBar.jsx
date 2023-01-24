import React from "react";
import {Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return(
        <Paper
        component="form"
        onSubmit={()=>{}}
        sx={{ background:"#0F0F0F", borderRadius:30, border:'1px solid gray', pl:2, width:'30vw' }}>
            {/*<p>Search...</p>*/}
            <input
            style={{ background:"#0F0F0F", border:'none', paddingTop:'10px', paddingBottom:'10px', width:'26vw'}}
            className="search-bar"
            placeholder="Search..."
            value=""
            onSubmit={()=> {}}/>
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon/>
            </IconButton>
        </Paper>

    );
}

export default SearchBar;