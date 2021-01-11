import React from "react";
import Link from '../../Link'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    height: '15em',     //temporary height, remove when placing real icon
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none !important"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  }
}));

export default function Footer({value, setValue, selectedIndex, setSelectedIndex, ...rest}) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => setValue(0)}
                href="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);                  
                }}
                href="/menus"
                className={classes.link}
              >
                Menus
              </Grid>
              <Grid
                item
                component={Link}
                href="#"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                MenuItem1
              </Grid>
              <Grid
                item
                component={Link}
                href="#"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                MenuItem2
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                href="#"
                className={classes.link}
              >
                MenuItem3
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                href="#"   //  '/about'
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                href="#"   //  '/about'
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                href="#"   //  '/about'
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                href="#"        //  '/contact
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      {/*  replace div with img  */}
      <div        
        alt="main-icon"        
        className={classes.adornment}
      />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src="/assets/facebook.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="twitter logo"
            src="/assets/twitter.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src="/assets/instagram.svg"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
}


/*
CUSTOMIZATIONS
all links reflect Header's Tab(s) +- MenuItems   (value---Tab index, selectedIndex --- MenuItem index, passed as props from parent to Header and Footer)
*/