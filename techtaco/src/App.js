import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import signUp from './components/signUp.js';
import HomePage from './components/HomePage.js'
import Display from './components/Display.js'
import DisplayProfiles from './components/Profiles.js'

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
