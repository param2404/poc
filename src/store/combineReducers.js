/* eslint-disable */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from './../components/Login/store/reducers'

export default (history) =>
 combineReducers({
        loginReducer,
        router: connectRouter(history),
    });
