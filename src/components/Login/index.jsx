import React,{useCallback, useState, useEffect} from 'react';
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
import * as LoginAction from './store/actions'


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

const Login = React.memo(({login,history,user}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    // submitting the login form
    const submitLoginForm = useCallback(
        (event) => {
            event.preventDefault()
              login({ email, password })
        },
        [email, password],
    )

    // If logged in and user navigates to Login page, should redirect them to dashboard
    useEffect(() => {
        if (user) {
             history.push('/dashboard')
        }
    }, [user, history])

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
        </Typography>
                <ValidatorForm className={classes.form} onSubmit={submitLoginForm}>
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        validators={['required','isEmail']}
                        errorMessages={['This field is required', 'Invalid Email ']}
                    />
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        LOGIN
          </Button>
                    
                </ValidatorForm>
            </div>
        </Container>
    );
})

const mapStateToProps = ({ loginReducer }) => {
    return {
        user: loginReducer.user
    }
}

export default connect(mapStateToProps, { ...LoginAction })(Login)