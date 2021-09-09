import React from "react";

import { Drawer } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 200;
const drawerWidthSmall = 60;

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      width: drawerWidthSmall,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      width: drawerWidthSmall,
      backgroundColor: theme.palette.primary.main,
    },
  },
  toolbarMargin: theme.mixins.toolbar,
  text: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  icon: {
    [theme.breakpoints.down("xs")]: {
      color: "white",
    },
  },
}));

function Leftbar() {
  const classes = useStyle();

  const list = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Friends", icon: <PersonIcon /> },
    { name: "Video", icon: <PlayCircleOutlineIcon /> },
    { name: "Bookmark", icon: <BookmarkIcon /> },
    { name: "Setting", icon: <SettingsIcon /> },
  ];

  return (
    <>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbarMargin} />
        <List>
          {list.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} className={classes.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Leftbar;
