import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "", icon: <HomeIcon /> },
    { name: "Menu", to: "menu", icon: <RestaurantMenuIcon  />},
    { name: "Contact Us", to: "contact", icon: <ContactsIcon />},
  ];

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black",}}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between",  }}>
            <Typography
              fontSize={"28px"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <DinnerDiningIcon fontSize="large" sx={{ marginRight: 1, color: "goldenrod" }} />
              BiteBuzz

            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navbar-menu">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active-link" : undefined
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      isActive ? "active-link" : undefined
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "active-link" : undefined
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              
              </ul>
            </Box>

            <IconButton
              onClick={() => setOpen(true)}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon/>
            </IconButton>

            <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
              <List sx={{ width: 200 }} >

              <Typography height={"48px"}
              fontSize={"25px"} fontWeight={"bold"}
              sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              onClick={() => setOpen(false)}
           >
              <DinnerDiningIcon fontSize="large" sx={{ marginRight: 1,color: "goldenrod"  }} />
              BitBuzz
            </Typography>
            <Divider/>
                {navItems.map((item, i) => (
                  <ListItemButton
                  key={i}
                  sx={{ textAlign: "center" ,color: "black" }}
                  onClick={() => setOpen(false)}
                  >
                    <NavLink
                      to={item.to}  style={{display:"flex",justifyContent: "center", alignItems: "center"}}
                      className={({ isActive }) =>
                        isActive ? "active-link menu-item" : undefined
                      } 
                    >
                      <ListItemIcon sx={{marginRight: -2}} >{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name}/>
                    </NavLink>
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
         <Box sx={{height: {xs:"12px" , md:"25px"}}}>

         </Box>
      </Box>
    </div>
  );
}
