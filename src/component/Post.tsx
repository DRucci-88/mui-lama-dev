import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox } from "@mui/material"
import { red } from "@mui/material/colors";

export const Post = () => {
  return (<Card sx={{
    // maxHeight: '20%',
    marginBottom: 2,
  }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      sx={{
        maxHeight: '20%'
      }}
      image="https://picsum.photos/2000"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Checkbox
        aria-label='favorite'
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite sx={{ color: 'red' }} />}
      />
      {/* <IconButton aria-label="add to favorites">
        <Favorite />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton> */}
    </CardActions>
  </Card>);
};
