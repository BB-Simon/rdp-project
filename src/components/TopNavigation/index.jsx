import React from "react";
import { Toolbar, AppBar, Typography, makeStyles } from "@material-ui/core";

import Button from "../Button";
import resource_data_platform from "../../assets/icons/resource-data-platform.svg";
import AlertIcon from "../../assets/icons/AlertIcon";
import Logo from "../../assets/icons/Logo";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: "#0e1625",
    color: "#ffffff",
    maxHeight: "48px",
    boxShadow: "none",
  },
}));

const TopNavigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Button
          icon={<Logo />}
          background="none"
          width="30px"
          height="30px"
          margin="0 7px 0 0"
          borderRadius="0px"
        />
        <Typography variant="h6" noWrap>
          <img src={resource_data_platform} alt="" />
        </Typography>
        <Button
          icon={<AlertIcon />}
          width="70px"
          height="48px"
          borderRadius="0px"
          margin="0 0 0 54px"
        />
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Button
            icon="A"
            width="28px"
            height="28px"
            borderRadius="14px"
            color="#fff"
            size="14px"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
