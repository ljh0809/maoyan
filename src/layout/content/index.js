import React from 'react';
import {BrowserRouter ,Route,Redirect,Switch} from 'react-router-dom'
import Home from "../../pages/home";
import Order from "../../pages/order";
import City from "../../pages/home/city";
import Search from "../../pages/home/search";
import Login from "../../pages/login";
import Detail from "../../pages/home/detail";
import Auth from "../../guard";

function Content (){

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route path='/home/city' component={City}/>
                    <Route path='/home/search' component={Search}/>
                    <Auth path='/detail' component={Detail}/>
                    <Auth path='/order' component={Order}/>
                    <Route path='/login' component={Login}/>
                    <Redirect exact from='/' to='/home' />
                    <Route render={()=>(<div>404找不到页面</div>)}/>
                </Switch>

            </BrowserRouter>

        );

}

export default Content