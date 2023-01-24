// import React, {useState} from "react";
import {categories} from "../utils/constants";
import {Stack, Typography} from "@mui/material";

function Sidebar(props){
    const {selectedCategory, setSelectedCategory} = props;

    return(
            <Stack
                direction="row"
                sx={{ flexDirection: {md:"column"}, overflow:"auto", maxHeight:"90vh", position: "sticky",
                    top: "0px", float:"left", backgroundColor:"black" , padding:"10px", width:"auto", minWidth:"180px", margin:"0 10px 0"}}>
                {
                    categories.map((category)=> (
                            <button
                                className="category-btn"
                                key={category.name}
                                onClick={()=> setSelectedCategory(category.name)}
                                style={{
                                    background: category.name === selectedCategory? "#222222" : "black"
                                    , paddingLeft:"10px"
                                    , paddingTop:"7px"
                                    , paddingBottom:"7px"
                                    , paddingRight:"20px"
                                    , border:"0.1px"
                                    , borderRadius:"10px"}}>

                                <div
                                    style={{display:"flex",
                                        alignItems:"center",
                                        justifyContent:"left"}}>
                                    <span>{category.icon}</span>
                                    <span style={{ marginLeft:"20px"}}>{category.name}</span>
                                </div>

                            </button>
                        )
                    )
                }

                <Typography variant="p">
                    © 2023 Google LLC
                </Typography>
            </Stack>
    );
}

export default Sidebar;