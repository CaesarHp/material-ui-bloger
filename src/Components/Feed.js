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

function Feed() {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.container}>
        <Grid container>
          <Grid item sm={12} md={6} className={classes.post}>
            <Post />
          </Grid>

          <Grid item sm={12} md={6} className={classes.post}>
            <Post />
          </Grid>

          <Grid item sm={12} md={6} className={classes.post}>
            <Post />
          </Grid>

          <Grid item sm={12} md={6} className={classes.post}>
            <Post />
          </Grid>

          <Grid item sm={12} md={6} className={classes.post}>
            <Post />
          </Grid>

          <Grid item sm={12} md={6} className={classes.post}>
            <Post />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Feed;
