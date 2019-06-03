import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import App from './App';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
    const routes = (
        <Route path="/" component={App}>
            <Route path = "login" component={Login}/>
            <Route path="home" component={Home}/>
        </Route>
    );

export default routes;