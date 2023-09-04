import React from "react";
import { logo } from "../utils/constants"
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar(){
    return(
        <Stack
         direction="row"
         p={2}
         alignItems="center"
         sx={{position:"sticky", top:0, background:"black", justifyContent:"space-between"}}
        >
         <Link to="/" style={{ display:"flex", alignItems:"center" }}>
            <img src={logo} alt="logo" height={45} />
         </Link>  
         <SearchBar />
        </Stack>
    )
}



export default Navbar;