import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Box } from "@mui/material"

import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import ChannelDetail from "./components/ChannelDetail"
import SearchFeed from "./components/SearchFeed"
import VideoDetail from "./components/VideoDetail"



function App() {
    return (
        <BrowserRouter >
            <Box sx={{backgroundColor:"black"}}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={ <Feed />} />
                    <Route path="/video/:id" element={ <VideoDetail />} />
                    <Route path="/channel/:id" element={ <ChannelDetail />} />
                    <Route path="/search/:searchTerm" element={ <SearchFeed /> } /> 
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App