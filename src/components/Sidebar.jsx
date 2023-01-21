import React from "react";
import {categories} from "../utils/constants";
import {Stack} from "@mui/material";

function Sidebar(){
    return(
        <Stack
        direction="row"
        sx={{ flexDirection: {md:"column"}, overflow:"auto", maxHeight:"90vh", position: "sticky",
            top: "10px",
            // display:"block",
            float:"left", backgroundColor:"black" , padding:"10px", width:"auto", minWidth:"180px", margin:"0 10px 0"}}>
            {
                categories.map((category)=> (
                        <button
                        style={{ backgroundColor:"#222222", paddingLeft:"10px", marginTop:"19px", paddingRight:"20px", border:"0.1px", borderRadius:"8px", }}>
                            <div
                                style={{display:"flex", alignItems:"center", justifyContent:"left"}}>
                                <span>{category.icon}</span>
                                <span style={{ marginLeft:"20px"}}>{category.name}</span>
                            </div>
                        </button>
                    )
                )
            }
        </Stack>
    );
}

export default Sidebar;