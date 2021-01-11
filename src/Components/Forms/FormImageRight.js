import React, {useState} from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Grid, Typography, Button, TextField, Dialog, DialogContent, Snackbar, CircularProgress, useMediaQuery} from '@material-ui/core'

import axios from 'axios'

import Link from '../../Link'
import ButtonArrow from '../Buttons/ButtonArrow'

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url("/assets/repeatingBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
        backgroundImage: `url("/assets/mobileBackground.jpg")`
        }
    },
   sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225
        }
  },
   message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5
  }  
}))

const FormImageRight = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");

    const [message, setMessage] = useState("");

    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState({
        open: false,
        message: "",
        backgroundColor: ""
    });

    const onChange = event => {
        let valid;        
        switch (event.target.id) {
        case "email":
            setEmail(event.target.value);
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
            event.target.value
            );

            if (!valid) {
            setEmailHelper("Invalid email");
            } else {
            setEmailHelper("");
            }
            break;
        case "phone":
            setPhone(event.target.value);
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
            event.target.value
            );

            if (!valid) {
            setPhoneHelper("Invalid phone");
            } else {
            setPhoneHelper("");
            }
            break;
        default:
            break;
        }
    };

    const onConfirm = () => {
        setLoading(true);       

        axios
        .get(
            "https://us-central1-material-ui-course-951d5.cloudfunctions.net/sendMail",
            {
            params: {
                name: name,
                email: email,
                phone: phone,
                message: message
            }
            }
        )
        .then(res => {
            setLoading(false);
            setOpen(false);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setAlert({
            open: true,
            message: "Message sent successfully!",
            backgroundColor: "#4BB543"
            });
        })
        .catch(err => {
            setLoading(false);
            setAlert({
            open: true,
            message: "Something went wrong, please try again!",
            backgroundColor: "#FF3232"
            });
        });
    };


    const buttonContents = (
        <>
            Send Message
            <img
                src="/assets/send.svg"
                alt="paper airplane"
                style={{ marginLeft: "1em" }}
            />
        </>
    );
    return (
        <Grid container direction="row">
        
        <Grid
            item
            container
            
            justify="center"
            alignItems="center"
            style={{
            marginBottom: matchesMD ? "5em" : 0,
            marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0
            }}
            lg={4}
            xl={3}
        >
            <Grid item>
            <Grid container direction="column">
                <Grid item>
                    <Typography
                        align={matchesMD ? "center" : undefined}
                        variant="h1"
                        style={{ lineHeight: 1 }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        align={matchesMD ? "center" : undefined}
                        variant="body1"
                        style={{ color: theme.palette.common.blue }}
                    >
                        We're waiting.
                    </Typography>
                </Grid>
                <Grid item container style={{ marginTop: "2em" }}>
                <Grid item>
                    <img
                    src="/assets/phone.svg"
                    alt="phone"
                    style={{ marginRight: "0.5em" }}
                    />
                </Grid>
                <Grid item>
                    <Typography
                    variant="body1"
                    style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                    >
                    <a
                        href="tel:5555555555"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        (555) 555-5555
                    </a>
                    </Typography>
                </Grid>
                </Grid>
                <Grid item container style={{ marginBottom: "2em" }}>
                <Grid item>
                    <img
                    src="/assets/email.svg"
                    alt="envelope"
                    style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                    />
                </Grid>
                <Grid item>
                    <Typography
                    variant="body1"
                    style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                    >
                    <a
                        href="mailto:shakhovslavik@gmail.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        slavikshakhov@gmail.com
                    </a>
                    </Typography>
                </Grid>
                </Grid>
                <Grid item container direction="column" style={{ width: "20em" }}>
                <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                    label="Name"
                    id="name"
                    fullWidth
                    value={name}
                    onChange={event => setName(event.target.value)}                              
                    />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                    label="Email"
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    id="email"
                    fullWidth
                    value={email}
                    onChange={onChange}
                    
                    />
                </Grid>
                    <Grid item style={{ marginBottom: "0.5em" }}>
                        <TextField
                        label="Phone"
                        helperText={phoneHelper}
                        error={phoneHelper.length !== 0}
                        id="phone"
                        fullWidth
                        value={phone}
                        onChange={onChange}
                         
                        />
                    </Grid>
                </Grid>
                <Grid item style={{ width: "20em" }}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        value={message}
                        className={classes.message}
                        multiline
                        placeholder="Tell us more about your project"
                        fullWidth
                        rows={10}
                        id="message"
                        onChange={event => setMessage(event.target.value)}
                    />
                </Grid>
                <Grid item container justify="center" style={{ marginTop: "2em" }}>
                <Button                      
                    disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0 ||
                    email.length === 0 ||
                    phone.length === 0
                    }                    
                    variant="contained"
                    className={classes.sendButton}
                    onClick={() => setOpen(true)}
                >
                    {buttonContents}
                </Button>
                </Grid>
            </Grid>
            </Grid>
        </Grid>



        <Dialog
            style={{ zIndex: 1302 }}
            open={open}
            fullScreen={matchesSM}
            onClose={() => setOpen(false)}
        >
            <DialogContent>
                <Grid container direction="column">
                    <Grid item>
                    <Typography align="center" variant="h4" gutterBottom>
                        Confirm Message
                    </Typography>
                    </Grid>
                    <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                        label="Name"
                        id="name"
                        fullWidth
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    </Grid>
                    <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                        label="Email"
                        error={emailHelper.length !== 0}
                        helperText={emailHelper}
                        id="email"
                        fullWidth
                        value={email}
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                        label="Phone"
                        helperText={phoneHelper}
                        error={phoneHelper.length !== 0}
                        id="phone"
                        fullWidth
                        value={phone}
                        onChange={onChange}
                    />
                    </Grid>
                </Grid>
                <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
                    <TextField
                    InputProps={{ disableUnderline: true }}
                    value={message}
                    className={classes.message}
                    multiline
                    fullWidth
                    rows={10}
                    id="message"
                    onChange={event => setMessage(event.target.value)}
                    />
                </Grid>
                <Grid
                    item
                    container
                    direction={matchesSM ? "column" : "row"}
                    style={{ marginTop: "2em" }}
                    alignItems="center"
                >
                    <Grid item>
                    <Button
                        style={{ fontWeight: 300 }}
                        color="primary"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            disabled={
                            name.length === 0 ||
                            message.length === 0 ||
                            phoneHelper.length !== 0 ||
                            emailHelper.length !== 0 ||
                            email.length === 0 ||
                            phone.length === 0
                            }
                            variant="contained"
                            className={classes.sendButton}
                            onClick={onConfirm}                            
                        >
                            {loading ? <CircularProgress size={30} /> : buttonContents}
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
        <Snackbar
            open={alert.open}
            message={alert.message}
            ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={() => setAlert({ ...alert, open: false })}
            autoHideDuration={4000}
        />

        
        <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            className={classes.background}
            alignItems="center"
            justify={matchesMD ? "center" : undefined}
            lg={8}
            xl={9}
        >
            <Grid
            item
            style={{
                marginLeft: matchesMD ? 0 : "3em",
                textAlign: matchesMD ? "center" : "inherit"
            }}
            >
            <Grid container direction="column">
                <Grid item>
                <Typography align={matchesMD ? "center" : undefined} variant="h1">
                    Some Heading
                    <br />
                    Some Heading
                </Typography>
                <Typography
                    align={matchesMD ? "center" : undefined}
                    variant="subtitle2"
                    style={{ fontSize: "1.5rem" }}
                >
                    Some subheading here
                </Typography>
                <Grid container justify={matchesMD ? "center" : undefined} item>
                    <Button
                    component={Link}
                    href="/"
                    variant="outlined"
                    className={classes.learnButton}
                    onClick={() => props.setValue(2)}
                    style={{textDecoration: 'none'}}
                    >
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    <ButtonArrow
                        width={10}
                        height={10}
                        fill={theme.palette.common.blue}                        
                    />
                    </Button>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
           
        </Grid>
    </Grid>
    )
}

export default FormImageRight
