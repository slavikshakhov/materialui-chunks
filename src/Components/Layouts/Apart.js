import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    bg: {
        backgroundImage: `url("/assets/repeatingBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        //backgroundAttachment: 'fixed'         !!! add to make section static when scrolling, need content outside of section
    }
}))

const Apart = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid style={{backgroundColor: theme.palette.common.orange}}>
            <Grid
            container
            style={{ height: "77em" }}            // alter if needed
            alignItems="center"
            direction="row"
            className={classes.bg}          
            >
            <Grid
                item
                container
                style={{
                textAlign: matchesXS ? "center" : "inherit"
                }}
                direction={matchesXS ? "column" : "row"}
            >
                <Grid
                item
                sm
                style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
                >
                <Grid
                    container
                    style={{ marginBottom: matchesXS ? "10em" : 0 }}
                    direction="column"
                >
                    <Typography variant="h1" style={{ color: "white" }}>
                    About Us
                    </Typography>
                    <Typography variant="subtitle2">Some text here...</Typography>                
                </Grid>
                </Grid>
                <Grid
                item
                sm
                style={{
                    marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                    textAlign: matchesXS ? "center" : "right"
                }}
                >
                <Grid container direction="column">
                    <Typography variant="h1" style={{ color: "white" }}>
                    Contact Us
                    </Typography>
                    <Typography variant="subtitle2">Some text here...</Typography>              
                </Grid>
                </Grid>
            </Grid>
            
            </Grid>
        </Grid>        
    )
}

export default Apart
