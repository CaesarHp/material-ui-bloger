import "./App.css";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Navbar from "./Components/Navbar";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Add from "./Components/Add";

const useStyle = makeStyles((theme) => ({
  main: {
    display: "flex",
  },
  right: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyle();

  return (
    <>
      <div>
        <Navbar />
        <div className={classes.main}>
          <Leftbar />
          <Grid container>
            <Grid item md={8} xs={12}>
              <Feed />
            </Grid>
            <Grid item md={4} className={classes.right}>
              <Rightbar />
            </Grid>
          </Grid>
        </div>
        <Add />
      </div>
    </>
  );
}

export default App;
