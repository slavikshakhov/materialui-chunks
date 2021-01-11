import React from 'react'

import {Grid, Typography, Button, useMediaQuery} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Image from 'next/image'


const useStyles = makeStyles(theme => ({
     mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
          marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
          marginTop: "2em"
        }
    },
    rowContainer: {   
      marginTop: '6em',       
      paddingRight: '2em',
      [theme.breakpoints.down('sm')]: {
        marginTop: '3em'
      }     
    },
    
    
    sideImage: {
        marginLeft: "2em",        
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
    }
  },
}))

const z = () => {
    const classes = useStyles()
    const theme = useTheme();
  
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    return (      
        <Grid container direction="column" className={classes.mainContainer}>    
             {/* Left */}      
            <Grid item>          
            {/*----Left-----*/}
            <Grid
            container
            direction="row"
            spacing={5}
            justify={matchesSM ? "center" : undefined}        // 'flex-end' if right 
            className={classes.rowContainer}
            >
            <Grid
                item
                style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined                
                }}
                
            >
                <Typography variant="h4">Custom Software Development</Typography>
                <Typography variant="subtitle1">
                Save Energy. Save Time. Save Money.
                </Typography>
                <Typography variant="subtitle1">
                Complete digital solutions, from investigation <br /> Complete digital solutions, from investigation        
                </Typography>
                
            </Grid>
            <Grid item>
                <Image
                className={classes.sideImage}
                src='/assets/me.jpg'
                alt='image' 
                width={180}   
                height={180}                          
                />
            </Grid>
            </Grid>
        </Grid>
        {/* Right */}
        <Grid item>
      
        {/*-----Right-----*/}
        <Grid
          container
          direction="row"
          spacing={5}
          justify={matchesSM ? "center" : 'flex-end'}
          className={classes.rowContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined              
            }}
            
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation Complete <br /> digital solutions, from investigation        
            </Typography>
            
          </Grid>
          <Grid item>
            <Image
                className={classes.sideImage}
                src='/assets/me.jpg'
                alt='image' 
                width={180}   
                height={180}                          
                />
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    )
}

export default z
