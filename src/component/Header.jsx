import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import "../styles/HeaderStyle.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  }
  // menu bar
  const drawer = (
    <Box onClick={handleToggleDrawer} sx={{ textAlign:"center"}}>
      <IconButton style={{position:"absolute", right:"0px"}}>
         <CloseIcon/>
      </IconButton>
      <Typography
        variant='h6'
        component='div'
        sx={{flexGrow: 1}}
        style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"2rem", marginBottom:"2rem"}}

      >
          <EmojiFoodBeverageIcon style={{marginRight:"0.5rem"}}/>
          My Tea 
      </Typography>
      <Divider/>
      <ul className="mobile-navigation-menu">
        <li>
          <NavLink to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </Box>
  )

  return (
    <div>
      <Box >
        <AppBar component={'nav'} sx={{bgcolor:'#4CAF50'}}>
          <Toolbar>
            <IconButton 
              color="inherit" 
              aria-label='open drawer' 
              edge="start" 
              sx={{mr:2, display:{sm:"none"}}}
              onClick={handleToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{flexGrow: 1}}
              style={{display:"flex", alignItems:"center"}}
            >
                <EmojiFoodBeverageIcon style={{marginRight:"0.5rem"}}/>
                My Tea 
            </Typography>
            <Box sx={{display: {xs: "none", sm: "block"}}}>
                <ul className="navigation-menu">
                  <li>
                    <NavLink to="/home"
                    style={isActive => ({
                      color: isActive ? "white" : "blue"
                    })}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/menu" 
                    style={isActive => ({
                      color: isActive ? "white" : "blue"
                    })}
                    >
                      Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" 
                    style={isActive => ({
                      color: isActive ? "white" : "blue"
                    })}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" 
                    style={isActive => ({
                      color: isActive ? "white" : "blue"
                    })}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer 
            varient="temporary"
            open={toggleDrawer}
            onClose={handleToggleDrawer}
            sx={{display:{xs:"block", sm:"none"}, "& .MuiDrawer-paper":{
              boxSizing:'border-box',
              width:'15rem'
            }}}
          >
              {drawer} 
          </Drawer>
         </Box> 
         <Toolbar/>
      </Box>
    </div>
  )
}

export default Header
