import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import './sign.css'; //for signUp page 

import signUp from './components/signUp.js';
import HomePage from './components/HomePage.js'
import Display from './components/Display.js'
import DisplayProfiles from './components/Profiles.js'
import Matches from './components/Matches.js'

class App extends React.Component {

  state = {
    name: undefined,
  }





  render (){
    return(

      <div className="App">
        <Router>
          <Switch>

            <Route exact path="/SignUp" component={signUp} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Display" component={Display} />
            <Route exact path="/Profiles" component={DisplayProfiles} />
            <Route exact path="/Matches" component={Matches} />

          </Switch>
        </Router>
      </div>
    //   <div>
    //   <h1>
    //     This Is TechTacos
    //   </h1>
    //   <HomePage getUsername={this.getUsername}/>
    // </div>
    )
  }


}

export default App;
