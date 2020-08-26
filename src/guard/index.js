import React from 'react';
import {Route,Redirect} from 'react-router-dom'

function Auth (props) {

        let {component:Component, ...rest} = props;
        // console.log(props)
        return (
           <Route {...rest} render={(props)=>(
               Boolean(window.localStorage.getItem('token')) ? <Component {...props}/> : <Redirect to='/login' />
           )} />
        );

}

export default Auth;