import React, { useState } from "react";

import { alpha, makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import Mail from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CloseIcon from "@material-ui/icons/Close";

import hlogo from "../img/h-logo-black.png";

const useStyle = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    width: "30%",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.openSearch ? "flex" : "none"),
      width: "60%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  searchBtn: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  closeBtn: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.openSearch ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(3),
  },
}));

function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);

  const classes = useStyle({ openSearch });

  const searchBarHandler = () => {
    setOpenSearch(true);
  };

  const closeSearchBarHandler = () => {
    setOpenSearch(false);
  };

  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Bloger</Typography>
          <div className={classes.search}>
            <SearchIcon />
            <InputBase placeholder="Search..." className={classes.input} />
            <CloseIcon
              onClick={closeSearchBarHandler}
              className={classes.closeBtn}
            />
          </div>
          <div className={classes.icons}>
            <SearchIcon
              onClick={searchBarHandler}
              className={classes.searchBtn}
            />
            <Badge badgeContent={0} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={0} color="secondary" className={classes.badge}>
              <NotificationsIcon />
            </Badge>
            <Avatar alt="H logo" src={hlogo} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
