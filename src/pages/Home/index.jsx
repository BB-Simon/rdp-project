import React, { useState } from "react";
import { ButtonGroup, CssBaseline, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TopNavigation from "../../components/TopNavigation";
import Header from "../../components/Header";
import RightSider from "../../components/RightSider";
import Button from "../../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
    padding: "100px 35px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopNavigation />
      <Header open={open} />
      <main className={classes.content}>
        <div className={classes.main}>
          <div onClick={handleDrawerOpen}>on/off</div>
          Hello from Home page
        </div>
      </main>
      <RightSider open={open} toggleDrawer={handleDrawerClose} />
    </div>
  );
};

export default Home;
