import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:"center", bgcolor:"#23b97d", color:"white", p: 3}}>
        <Box sx={{
            my:3, 
            "& svg":{
                fontSize:"3rem",
                cursor:"pointer",
                mr:2
            },
            "& svg:hover":{
                color:"#800000",
                transform:"translateX(5px)",
                transition: "all 400ms"
            }
        }}>
            <InstagramIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
            <GitHubIcon/>
        </Box>
        <Typography variant="h5" 
            sx={{"@media (max-width:600px)":{
                fontSize:"1rem"
                },
            }}
        >
            All Rights Reserved &#169; to My company
        </Typography>
      </Box>
    </>
  )
}

export default Footer
