import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
   rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em"
    }
  },
  italicCentered: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4
  },
}))

const Text = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Grid container direction='column' spacing={5}>

            {/* Heading left --> center */}
            <Grid
                item
                className={classes.rowContainer}
                style={{ marginTop: matchesMD ? "1em" : "2em" }}
            >
                <Typography align={matchesMD ? "center" : undefined} variant="h1">
                About Us
                </Typography>
            </Grid>

            {/* Text center --> center */}
            <Grid
                item
                container
                justify="center"
                className={classes.rowContainer}
                style={{ marginTop: "3em" }}
            >
                <Typography
                variant="h4"
                align="center"                                  // right 
                className={classes.italicCentered}
                >
                Whether it be person to person, business to consumer, or an individual
                to their interests, technology is meant to bring us closer to what we
                care about in the best way possible. Arc Development will use that
                principle to provide fast, modern, inexpensive, and aesthetic software
                to the Midwest and beyond.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Text
