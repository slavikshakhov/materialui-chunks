import React from 'react'
import {Button, Grid, Card, CardContent, Typography} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Link from '../../Link'

const useStyles = makeStyles(theme => ({
    cardContainer: {        
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
        paddingTop: "8em",
        paddingBottom: "8em",
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        width: "100%"
        }
    },
    bg: {
        backgroundImage: `url("/assets/repeatingBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        opacity: 0.7
    }
}))
const CardCenter = () => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        /* -----include if dark layer under img bg needed
            <Grid
            container
            style={{backgroundColor: '#fff'}}
        >        
        */
        
            <Grid
            item container
            style={{ height: "50em", marginTop: "5em" }}
            alignItems="center"
            justify="center"
            className={classes.bg}
            >
                <Card className={classes.cardContainer}>
                    <CardContent>
                        <Grid
                            container
                            direction="column"
                            style={{ textAlign: "center" }}
                            >
                            <Grid item>
                            <Typography variant="h3" gutterBottom>
                                The Heading 
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1">
                                Visionary insights coupled with cutting-edge technology is a
                                recipe for revolution.
                            </Typography>
                            <Button
                                variant='outlined'
                                color='primary'
                                size='medium'
                                component={Link}
                                href='/'
                                style={{textDecoration: 'none', borderRadius: '50%'}}
                                >Check More...</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>            
            </Grid>
            /*
                </Grid>
            */
        
    )
}

export default CardCenter
