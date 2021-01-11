import React from 'react'
import {Button, Grid} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import ButtonArrow from './ButtonArrow'
import Link from '../../Link'

const useStyles = makeStyles(theme => ({
    btn: {
        borderColor: theme.palette.common.blue,
        color: theme.palette.common.blue,
        textDecoration: 'none !important',
        borderWidth: 2,
        textTransform: "none",    
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
        marginBottom: "2em"
    }
  },
}))
const ButtonWithArrow = () => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Button
                    component={Link}
                    href="/"
                    variant="outlined"
                    className={classes.btn}             
                    >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                        width={10}
                        height={10}
                        fill={theme.palette.common.blue}
                    />
                </Button>
            </Grid>
            {/* custom size */}
            <Grid item>
                <Button
                    component={Link}
                    href="/"
                    variant="outlined"                    
                    className={classes.btn}  
                    style={{height: 45, width: 145, fontSize: '0.9rem'}}           
                    >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                        width={10}
                        height={10}
                        fill={theme.palette.common.blue}
                    />
                </Button>
            </Grid>           
        </Grid>
    )
}

export default ButtonWithArrow
