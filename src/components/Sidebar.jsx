// import React, {useState} from "react";
import {categories} from "../utils/constants";
import {Stack, Typography} from "@mui/material";

function Sidebar(props){
    const {selectedCategory, setSelectedCategory} = props;

    return(
            <Stack
                direction="row"
                // height={50}
                sx={{ flexDirection: {md:"column"}, overflow:"auto", maxHeight:"90vh", position: "sticky",
                    // height: {sx:"10px"},
                    top: "50px", float:"left", background:"black" , padding:"10px", width:"auto",
                    minWidth:"200px",
                    margin:"0 10px 0"}}>
                {
                    categories.map((category)=> (
                            <button
                                className="category-btn"
                                key={category.name}
                                onClick={()=> setSelectedCategory(category.name == 'Home'? 'new & latest' : category.name)}
                                style={{
                                    background: category.name === selectedCategory? "#222222" : "black",
                                    paddingLeft:"10px",
                                    paddingTop:"7px",
                                    paddingBottom:"7px",
                                    paddingRight:"20px",
                                    // width:"200px",
                                    // height:"70px",
                                    // padding: {md:"7px 200px 7px 10px" , sx:"7px 20px 7px 10px"},
                                    border:"0.1px",
                                    borderRadius:"10px"}}>

                                <div
                                    style={{display:"flex",
                                        alignItems:"center",
                                        justifyContent:"left",
                                        cursor: "pointer"}}>
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