import React from "react"
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

function ChannelCard({ channelDetail, marginTop }){
    return(
        <Box 
            sx={{ 
                boxShadow: "none",
                borderRadius: "20px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                width: {xs: "356px", md:"320px"},
                height: "326px",
                margin:"auto",
                marginTop: marginTop,
            }}
        >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{
                display:"flex", justifyContent:"center", textAlign:"center",
                flexDirection:"column",color:"#fff"
            }}>
                <CardMedia 
                 image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                 alt={channelDetail?.snippet?.title}
                 sx={{ borderRadius:"50%", height:"180px",
                  width:"180px", mb:2, border:"1px solid #e3e3e3"
                 }}
                />
                <Typography variant="h6">
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ ml:"5px", fontSize:14, color: "gray" }} />
                </Typography>

                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>
            </CardContent>
        </Link>
            
        </Box>
    )
}

export default ChannelCard;