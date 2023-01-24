import React, {useState} from "react";
import {Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmitSearch = (e) =>{
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    }

    return(
        <Paper
        component="form"
        onSubmit={handleSubmitSearch}
        sx={{ background:"#0F0F0F", borderRadius:30, border:'1px solid gray', pl:2, width:'30vw' }}>
            {/*<p>Search...</p>*/}
            <input
            style={{ background:"#0F0F0F", border:'none', paddingTop:'10px', paddingBottom:'10px', width:'26vw'}}
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
                />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon/>
            </IconButton>
        </Paper>

    );
}

export default SearchBar;