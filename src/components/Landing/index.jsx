import React, { useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Typography,
    Container
} from '@material-ui/core';
import {
    LockOutlined
} from '@material-ui/icons';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as RegisterAction from './store/actions'


const useStyles = makeStyles((theme) => ({
    paper: {
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
}));

const Register=React.memo(({register})=> {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [ssl, setSSL] = useState('')

    const submitDetails = () => {
        register({firstName,lastName,contactNumber,ssl})
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Submit Your Details
        </Typography>
                <ValidatorForm className={classes.form} onSubmit={submitDetails} >
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        validators={['required']}
                        errorMessages={['This field is required']}
                    />
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        validators={['required']}
                        errorMessages={['This field is required']}
                    />
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="contactNumber"
                        label="Contact Number"
                        name="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        validators={['required', 'matchRegexp:^[0-9\b]+$']}
                        errorMessages={['This field is required', 'Invalid Contact Number']}
                    />
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="ssl"
                        label="SSL"
                        name="ssl"
                        value={ssl}
                        onChange={(e) => setSSL(e.target.value)}
                        validators={['required']}
                        errorMessages={['This field is required']}
                    />
                   
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        SUBMIT
          </Button>

                </ValidatorForm>
            </div>
        </Container>
    );
})


export default connect(null, { ...RegisterAction })(Register)