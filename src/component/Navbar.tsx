import { Pets, Mail, NotificationImportant } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleOpenMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(true);
  }

  const handleCloseMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(false);
  }

  return (<>
    <AppBar position="sticky">
      <StyledToolbar>

        <Typography variant="h6" sx={{
          display: { xs: 'none', sm: 'block' }
        }}>
          Le Rucco Dev
        </Typography>

        <Pets sx={{
          display: { xs: 'block', sm: 'none' }
        }} />

        <Search><InputBase placeholder="Search..."></InputBase></Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationImportant color="action" />
          </Badge>
          <Avatar sx={{
            width: 30,
            height: 30
          }}
            src="https://picsum.photos/seed/picsum/200/200"
            onClick={handleOpenMenu}
          />
        </Icons>

        <UserBox>
          <Avatar sx={{
            width: 30,
            height: 30,
          }}
            src="https://picsum.photos/seed/picsum/200/200"
            onClick={handleOpenMenu} />
          <Typography variant="subtitle2" component={'span'}>Username</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar >
  </>)
  // return (<Box sx={{
  //   backgroundColor: 'purple',
  //   padding: 2,
  //   display: { xs: 'none', md: 'block' }

  // }}>
  //   Navbar
  // </Box>)
}