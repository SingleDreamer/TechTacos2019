import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './components/HomePage.js';

import signUp from './components/signUp.js';

class App extends React.Component {

  state = {
    name: undefined,
  }

  getUsername = async (e) => {
    e.preventDefault();
    const input_username = e.target.elements.name.value;
    console.log(input_username);

  }




  render (){
    return(

      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={signUp} />
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
