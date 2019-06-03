import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
      <h2>Welcome to React Router Tutorial</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Login </Link></li>
        <li><Link to={'/home'} className="nav-link">Home</Link></li>
       
      </ul>
      </nav>
      <hr />
      <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
         
      </Switch>
    </div>
  </Router>
  );
}

export default App;
