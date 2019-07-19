import React from 'react';
import HomePage from './components/HomePage.js'

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
      <div>
      <h1>
        This Is TechTacos
      </h1>
      <HomePage getUsername={this.getUsername}/>
    </div>
    )
  }

    
}

export default App;
