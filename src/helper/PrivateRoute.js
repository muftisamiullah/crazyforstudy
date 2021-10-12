import React,{useContext} from 'react';
import { Route, Redirect } from "react-router-dom"
import {AuthContext} from '../context/AuthContext';
import {  useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {state} = useContext(AuthContext);
    return (
        <Route {...rest} render={props => (
            state.isLoggedIn ? <Component {...props} /> : <Redirect to={{ pathname: '/auth/signin' }} />
        )} />
    )
    
}

export default PrivateRoute;