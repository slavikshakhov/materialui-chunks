import React, {useState, useEffect} from 'react';
import Router from "next/router";
//import ReactGA from "react-ga";

import {AppBar, Toolbar, Hidden, Grid, Tabs, Tab, Button, Popper, Grow, ClickAwayListener, IconButton, Menu, MenuList,  MenuItem, SwipeableDrawer, Paper,
        List, ListItem, ListItemText, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, 
        Typography, useMediaQuery, useScrollTrigger} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


import {makeStyles, useTheme} from '@material-ui/core/styles'
import Link from '../../Link'

import LanguageSwitchTab from '../Inputs/LanguageSwitchTab'


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: "8em",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    color: "white",
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
    zIndex: 1302
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemSpecial: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
  expansion: {
    backgroundColor: theme.palette.common.blue,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&.Mui-expanded": {
      margin: 0,
      borderBottom: 0
    },
    "&::before": {
      backgroundColor: "rgba(0, 0, 0, 0)"
    }
  },
  expansionDetails: {
    padding: 0,
    backgroundColor: theme.palette.primary.light
  },
  expansionSummary: {
    padding: "0 24px 0 16px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    },
    backgroundColor: props =>
      props.value === 1 ? "rgba(0, 0, 0, 0.14)" : "inherit"
  }
}));

const HeaderOne = ({value, setValue, selectedIndex, setSelectedIndex, ...rest}) => {
    const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [previousURL, setPreviousURL] = useState("");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const menuOptions = [
    {
      name: "MenuItem1",
      link: "#",
      activeIndex: 1,
      selectedIndex: 0
    },
    {
      name: "MenuItem2",
      link: "#",
      activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: "MenuItem3",
      link: "#",
      activeIndex: 1,
      selectedIndex: 2
    }
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Menus",
      link: "/menus",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event)
    },    
    { name: "About Us", link: "#", activeIndex: 2 },
    { name: "Contact Us", link: "#", activeIndex: 3 }
  ];

  function checkPath() {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== selectedIndex
            ) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/special":
          if (value !== false) {
            setValue(false);
          }

          break;
        default:
          break;
      }
    });
  }

  useEffect(() => {
    if (previousURL !== window.location.pathname) {
      setPreviousURL(window.location.pathname);
      //ReactGA.pageview(window.location.pathname + window.location.search);
    }

    if (window.performance) {
      if (performance.navigation.type == 1) {
        checkPath();
      }
    }
  }, [value, menuOptions, selectedIndex, routes, rest]);

  Router.events.on("routeChangeComplete", url => {
    checkPath();
  });

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            style={{textDecoration: 'none'}}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <LanguageSwitchTab />
      <Button
        component={Link}
        href="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {
          setValue(false);
          /*
          ReactGA.event({
            category: "Estimate",
            action: "Desktop Header Pressed"
          });
          */
        }}
      >
        Special
      </Button>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        placement="bottom-start"
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top left"
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => setOpenMenu(true)}
                  onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  id="simple-menu"
                  onKeyDown={handleListKeyDown}
                >
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      key={`${option}${i}`}
                      component={Link}
                      href={option.link}
                      classes={{ root: classes.menuItem }}
                      onClick={event => {
                        handleMenuItemClick(event, i);
                        setValue(1);
                        handleClose();
                      }}
                      selected={
                        i === selectedIndex &&
                        value === 1 &&
                        window.location.pathname !== "/menus"
                      }
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* <Menu
        id="simple-menu"
        disableAutoFocusItem
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{
          onMouseLeave: handleClose
        }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      ></Menu> */}
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map(route =>
            route.name === "Menus" ? (
              <ExpansionPanel
                elevation={0}
                key={route.name}
                classes={{ root: classes.expansion }}
              >
                <ExpansionPanelSummary
                  classes={{ root: classes.expansionSummary }}
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                    style={{ opacity: value === 1 ? 1 : null }}
                    onClick={() => {
                      setOpenDrawer(false);
                      setValue(route.activeIndex);
                    }}
                  >
                    <Link href={route.link} color="inherit">
                      {route.name}
                    </Link>
                  </ListItemText>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  classes={{ root: classes.expansionDetails }}
                >
                  <Grid container direction="column">
                    {menuOptions.map(route => (
                      <Grid item>
                        <ListItem
                          divider
                          key={`${route}${route.seleselectedIndex}`}
                          button
                          component={Link}
                          href={route.link}
                          selected={
                            selectedIndex === route.selectedIndex &&
                            value === 1 &&
                            window.location.pathname !== "/services"
                          }
                          classes={{ selected: classes.drawerItemSelected }}
                          onClick={() => {
                            setOpenDrawer(false);
                            setSelectedIndex(route.selectedIndex);
                          }}
                        >
                          <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                            {route.name}
                            
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ) : (
              <ListItem
                divider
                key={`${route}${route.activeIndex}`}
                button
                component={Link}
                href={route.link}
                selected={value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(route.activeIndex);
                }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(false);
              /*
              ReactGA.event({
                category: "Estimate",
                action: "Mobile Header Pressed"
              });
              */
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemSpecial,
              selected: classes.drawerItemSelected
            }}
            href="/special"
            selected={value === 4}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Special
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters>
                    <Button
                    component={Link}
                    href="/"
                    disableRipple
                    onClick={() => props.setValue(0)}
                    className={classes.logoContainer}
                    style={{ textDecoration: "none" }}
                    >
                        LogoImg
                    </Button>
                    <Hidden mdDown>{tabs}</Hidden>
                    <Hidden lgUp>{drawer}</Hidden>
                </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}

export default HeaderOne

/*
CUSTOMIZATIONS: 
1. arr for Tab(s) 
    routes with els: {name, link, activeIndex, +- mouseOver event to open Menu if Tab has Menu}  
    
2. arr for Menu items of a Tab that has Manu 
    menuOptions with els: {name, link, activeIndex, selectedIndex} 
    !!! remove arr if no Tabs with Menu
!!! activeIndex is index of Tab
!!! selectedIndex is index of Menu of one of Tabs


      
*/