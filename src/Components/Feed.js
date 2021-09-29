import React from "react";

import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Post from "./Post";

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  post: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
}));

const IMG_LINK = [
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2",
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2",
];

function Feed() {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.container}>
        <Grid container>
          {IMG_LINK.map((item, index) => (
            <Grid item key={index} sm={12} md={6} className={classes.post}>
              <Post imgLink={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Feed;
