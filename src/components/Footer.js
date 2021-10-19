import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "#ebdab4",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation width="auto" style={{ background: "#14213d" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Facebook />}
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Instagram />}
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Twitter />}
        />
      </BottomNavigation>
    </>
  );
};

export default Footer;
