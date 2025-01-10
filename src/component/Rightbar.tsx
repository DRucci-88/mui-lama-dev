import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react"

export const Rightbar = () => {

  return (<Box bgcolor={'lightgreen'} sx={{
    flex: 2,
    padding: 2,
    display: { xs: 'none', sm: 'block' }
  }}>
    <Box sx={{
      position: 'fixed',
      overflow: 'auto',
      height: '90vh',
      marginRight: '10px',
      alignItems: 'center'
    }}>
      <Typography variant="h6" fontWeight={100}>
        Online Friends
      </Typography>
      <AvatarGroup max={7}>
        {Array(10).fill(0).map((_, index) => {
          return <Avatar key={index} alt="Remy Sharp" src="https://picsum.photos/200/200" />
        })}
      </AvatarGroup>

      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Latest Photos
      </Typography>

      <ImageList cols={3} rowHeight={100} gap={8} sx={{ minHeight: 500 }}>
        {Array(9).fill(0).map((_, index) => {
          return <ImageListItem key={index}>
            <img alt="Remy Sharp" src="https://picsum.photos/200/200" loading="lazy" />
          </ImageListItem>
        })}
      </ImageList>

      <Typography variant="h6" fontWeight={100} mt={2} >
        Latest Conversation
      </Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://picsum.photos/200/200" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://picsum.photos/200/200" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="https://picsum.photos/200/200" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  </Box>)
}