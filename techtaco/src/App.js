import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import HomePage from './components/HomePage.js'
import Profiles from './components/Profiles.js'
import Display from './components/Display.js'
import signUp from './components/signUp.js';



// renders HomePage component
function Index() {
    return (
          <div className="wrapper">
            <div className="main">
              <div className="col-xs-5 title-container">
                {/* <Titles /> */}
                  <h1>Cohesion</h1>
              </div>
              <div class="col-xs-7 form-container">
                <HomePage/>
              </div>
          </div>
        </div>
    );
}

function SignUp() {
  return <signUp />;
}

function Users() {
  return <Profiles/>;
}

function AppRouter() {
  return (
    <Router>
      <div>

      {/* this is for the nav bar */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup/">SignUp</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav> */}
        {/* this is for the nav bar */}


      <div className="App">
        <Route path="/" exact component={Index} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profiles" component={Users} />
        <Route exact path="/Display" component={Display} />
      </div>
    </Router>
  );
}

export default AppRouter;