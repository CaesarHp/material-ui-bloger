import React from "react";

import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { ImageList } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },

  title: {
    fontWeight: 500,
    color: "#555",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginBottom: theme.spacing(4),
  },
  image: {
    marginBottom: theme.spacing(4),
  },
  link: {
    fontWeight: 400,
    color: "#555",
    marginRight: theme.spacing(2),
    cursor: "pointer",
  },
}));

const avatarData = [
  {
    name: "Remy Sharp",
    img: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Travis Howard",
    img: "https://material-ui.com/static/images/avatar/2.jpg",
  },
  {
    name: "Cindy Baker",
    img: "https://material-ui.com/static/images/avatar/3.jpg",
  },
  {
    name: "Agnes Walker",
    img: "https://material-ui.com/static/images/avatar/4.jpg",
  },
  {
    name: "Trevor Henderson",
    img: "https://material-ui.com/static/images/avatar/5.jpg",
  },
];

const imageData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2",
    title: "Breakfast",
    author: "author",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2",
    title: "Burgers",
    author: "author",
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2",
    title: "Camera",
    author: "author",
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2",
    title: "Morning",
    author: "author",
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2",
    title: "Hats",
    author: "author",
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2",
    title: "Honey",
    author: "author",
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format&dpr=2",
    title: "Bike",
    author: "author",
    cols: 2,
  },
];

const linkData1 = [{ name: "Food" }, { name: "Movie" }, { name: "Music" }];

const linkData2 = [{ name: "Sport" }, { name: "Art" }, { name: "Book" }];

function Rightbar() {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Friends List
        </Typography>
        <AvatarGroup max={4} className={classes.avatar}>
          {avatarData.map((item, index) => (
            <Avatar key={index} alt={item.name} src={item.img} />
          ))}
        </AvatarGroup>

        <Typography variant="h6" gutterBottom className={classes.title}>
          Gallery
        </Typography>
        <ImageList rowHeight={120} cols={3} style={{ marginBottom: 20 }}>
          {imageData.map((item, index) => (
            <ImageListItem key={index} cols={item.cols || 1}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" gutterBottom className={classes.title}>
          Category
        </Typography>
        {linkData1.map((item, index) => (
          <Link
            key={index}
            src="https://material-ui.com/"
            variant="body2"
            className={classes.link}
          >
            {item.name}
          </Link>
        ))}
        <Divider flexItem style={{ marginBottom: 5 }} />
        {linkData2.map((item, index) => (
          <Link
            key={index}
            src="https://material-ui.com/"
            variant="body2"
            className={classes.link}
          >
            {item.name}
          </Link>
        ))}
      </Container>
    </>
  );
}

export default Rightbar;
