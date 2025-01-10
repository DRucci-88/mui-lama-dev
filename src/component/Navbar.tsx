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

  const [ancorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const menuOpen: boolean = Boolean(ancorEl);

  const handleOpenMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
          <Avatar
            id="positioned-menu-avatar"
            sx={{
              width: 30,
              height: 30
            }}
            aria-controls={menuOpen ? "positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? 'true' : undefined}
            src="https://picsum.photos/seed/picsum/200/200"
            onClick={handleOpenMenu}
          />
        </Icons>

        <UserBox>
          <Avatar
            id="positioned-menu-avatar"
            sx={{
              width: 30,
              height: 30,
            }}
            aria-controls={menuOpen ? "positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? 'true' : undefined}
            src="https://picsum.photos/seed/picsum/200/200"
            onClick={handleOpenMenu} />
          <Typography variant="subtitle2" component={'span'}>Username</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-menu-avatar"
        onClose={handleCloseMenu}
        anchorEl={ancorEl}
        open={menuOpen}
        // aria-hidden={menuOpen ? undefined : 'true'}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar >
  </>)
}