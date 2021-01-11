import React, {useState} from 'react'

/*
import fetch from 'isomorphic-unfetch'
import {setCookie} from 'nookies'
import getConfig from 'next/config'
import Router from 'next/router'
*/


import {Avatar, Button, Card, CardContent, Grid, TextField, FormControlLabel, Box, Typography, Container, Link, Snackbar} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';

//const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme) => ({
  cardContainer: {        
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "4em", 
        width: '35em',    
        [theme.breakpoints.down("xs")]: {
            paddingTop: "4em",
            paddingBottom: "4em",
            paddingLeft: '2em',
            paddingRight: '2em',
            borderRadius: 0,
            width: '100%'                   
        },
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
   message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5
  }  
}));

const login = () => {
    //console.log(publicRuntimeConfig.API_URL)  
    const classes = useStyles()
    const {API_URL} = process.env

    const [identifier, setIdentifier] = useState('')
    const [identifierHelper, setIdentifierHelper] = useState('')    

    const [password, setPassword] = useState('')
    const [passwordHelper, setPasswordHelper] = useState('')
    
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        backgroundColor: ""
    });
   
    
    const onChange = event => {
        let valid;        
        switch (event.target.id) {
            case "identifier":
                setIdentifier(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                event.target.value
                );
                if(event.target.value === ''){
                    setIdentifierHelper('Email is required!')
                }
                else if (!valid) {
                    setIdentifierHelper("Invalid email");
                } else {
                    setIdentifierHelper("");
                }
                break;
            case "password":
                setPassword(event.target.value);
                //valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                valid = true
                if (event.target.value === '') {
                    setPasswordHelper("Password is required!");
                }
                else if (!valid) {
                    setPasswordHelper('Invalid password');
                } else {
                    setPasswordHelper("");
                }
                break;
            default:
                break;
            }
    };


    const handleLogin = async (e) => {
    /*
        e.preventDefault()        
        const loginInfo = {identifier, password}
        console.log(loginInfo)
        const loginRes = await fetch(`${API_URL}/auth/local`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        const loginResp = await loginRes.json()
        if(loginResp.statusCode === 400) {
             setAlert({
                open: true,
                message: "Something went wrong, please try again!",
                backgroundColor: "#FF3232"
            });
        } else {
            setCookie(null, 'jwt', loginResp.jwt , {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            Router.push('/articles')
        }
        console.log(loginResp)
    */
    }
    return (
    <Grid container alignItems='center' justify='center'>
        <Grid item>
        <Card className={classes.cardContainer}>
            
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="identifier"
                    label="Email Address"
                    name="identifier"
                    //autoComplete="email"
                    autoFocus
                    value={identifier}
                    onChange={onChange}          
                    error={identifierHelper.length !== 0 }
                    helperText={identifierHelper}
                    
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    //autoComplete="password"
                    value={password}
                    onChange={onChange}           
                    error={passwordHelper.length !== 0}
                    helperText={passwordHelper}
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleLogin}
                    disabled={
                        identifier === '' || 
                        password === ''
                    }
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            
        </Card>
      </Grid>
      
    <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
    />

    </Grid>
  
    )
}

export default login
