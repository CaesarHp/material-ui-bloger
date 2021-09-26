import React, { useState } from "react";

import { MenuItem } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 600,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
      height: "90vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(4),
  },
  input: {
    width: "100%",
  },
  btn: {
    marginRight: theme.spacing(2),
  },
}));

function Feed() {
  const classes = useStyle();

  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openSnackbarHandler = () => {
    setOpenSnackbar(true);

    setOpenModal(false);
  };

  const closeSnackbarHandler = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={openModalHandler}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal open={openModal} onClose={closeModalHandler}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                className={classes.input}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-textarea"
                label="Description"
                placeholder="What's happending..."
                multiline
                variant="outlined"
                className={classes.input}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Comment</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Everybody"
                    control={<Radio size="small" />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="My Friends"
                    control={<Radio size="small" />}
                    label="My Friends"
                  />
                  <FormControlLabel
                    value="Only Me"
                    control={<Radio size="small" />}
                    label="Only Me"
                  />
                  <FormControlLabel
                    value="Custom"
                    disabled
                    control={<Radio size="small" />}
                    label="Custom (Member)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                onClick={openSnackbarHandler}
                className={classes.btn}
              >
                Post
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={closeModalHandler}
                className={classes.btn}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={closeSnackbarHandler}
      >
        <Alert onClose={closeSnackbarHandler} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Feed;
