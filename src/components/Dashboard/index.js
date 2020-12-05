import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Button,
    AppBar,
    Toolbar,
    Typography,    
} from '@material-ui/core';
import { connect } from 'react-redux';
import * as HomeAction from './store/actions'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    button: {
        color: '#fff',
        fontWeight:'bold',
        backgroundColor:'rgba(0,0,244,0.6)'
    }
    
}));

const Dashboard=React.memo(({user,logOut,history})=> {
    const classes = useStyles();

    const onLogOut = () => {
        logOut()
    }

    // If logged out and user navigates to dashboard page, should redirect them to login
    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
    }, [user, history])
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                       {user && `Hello ${user.firstName}`}
          </Typography>
                    <Button className={classes.button} onClick={onLogOut}>
                        LOGOUT
                    </Button>
                </Toolbar>
            </AppBar>
           
        </div>
    );
})

const mapStateToProps = ({loginReducer}) => {
    return {
        user:loginReducer.user
    }
}

export default connect(mapStateToProps, { ...HomeAction })(Dashboard)