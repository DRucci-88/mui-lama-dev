import { Group, Home, MarkChatRead, ModeNight, Pages, People, Settings, } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { ReactElement } from "react";

export const Sidebar = () => {

  const menus: Array<{
    href: string,
    primary: string,
    icon: ReactElement
  }> = [{
    href: '#home',
    primary: 'Homepage',
    icon: <Home />
  }, {
    href: '#pages',
    primary: 'Pages',
    icon: <Pages />
  }, {
    href: '#groups',
    primary: 'Groups',
    icon: <Group />
  }, {
    href: '#marketplace',
    primary: 'Marketplace',
    icon: <MarkChatRead />
  }, {
    href: '#friends',
    primary: 'Friends',
    icon: <People />
  }, {
    href: '#settings',
    primary: 'Settings',
    icon: <Settings />
  }];

  return (<Box sx={{
    // backgroundColor: 'skyblue',
    flex: 1,
    padding: 2,
    display: { xs: 'none', sm: 'block' }
  }}>
    <List sx={{
      // backgroundColor: 'plum'
    }}>

      {menus.map((menu, index) => {
        return (<ListItem key={index + menu.href} disablePadding>
          <ListItemButton component='a' href={menu.href}>
            <ListItemIcon>
              {menu.icon}
            </ListItemIcon>
            <ListItemText primary={menu.primary} />
          </ListItemButton>
        </ListItem>);
      })}

      <ListItem disablePadding>
        <ListItemButton >
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </ListItem>

    </List>
  </Box>)
}