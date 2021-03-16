import {
  Divider,
  Drawer,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import Button from "../Button";
import ChannelFilter from "./components/ChannelFilter";
import IssuesFilter from "./components/IssuesFilter";
import LenghtFilter from "./components/LenghtFilter";
import StatusFilter from "./components/StatusFilter";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    paddingTop: "48px",
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
    paddingTop: "48px",
  },
}));

const RightSider = ({ open, toggleDrawer }) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div style={{ margin: "25px 20px 25px 15px" }}>
          <div
            style={{
              marginBottom: "25px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{ color: "#1e2447", fontSize: "15px", fontWeight: "500" }}
            >
              Channel Filter
            </Typography>
            <Button
              icon="Reset"
              width="27px"
              height="15px"
              background="none"
              color="#1e2447"
            />
          </div>
          <ChannelFilter />
          <Divider style={{ margin: "25px 0 20px" }} />
          <IssuesFilter />
          <Divider style={{ margin: "25px 0 20px" }} />
          <LenghtFilter />
          <Divider style={{ margin: "25px 0 20px" }} />
          <StatusFilter />
        </div>
      </Drawer>
    </div>
  );
};

export default RightSider;
