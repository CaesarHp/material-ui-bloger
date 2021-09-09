import React from "react";

import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import { format } from "date-fns";

const useStyle = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(4),
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  favorite: {
    color: theme.palette.secondary,
  },
}));

function Post() {
  const classes = useStyle();

  return (
    <>
      <Card elevation={3} className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="H" className={classes.avatar}>
              H
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="A Cup of Espresso"
          subheader={format(new Date(), "do MMMM Y")}
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/image-list/morning.jpg"
          title="The Moutain"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Espresso is generally thicker than coffee brewed by other methods,
            with a viscosity of warm honey. This is due to the higher
            concentration of suspended and dissolved solids, and the crema on
            top (a foam with a creamy consistency).
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" className={classes.share}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
