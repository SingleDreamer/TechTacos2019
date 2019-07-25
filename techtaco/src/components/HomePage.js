import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {};

      this.getUsername = this.getUsername.bind(this);
    }

  getUsername = async (e) => {
    e.preventDefault();
    // const input_username = e.target.elements.name.value;
    const input_username = e.target.value;
    console.log(input_username);

  }

render () {
//const HomePage = props => (
return (
  <div className="wrapper">
            <div className="main">
              <div className="col-xs-5 title-container">
                {/* <Titles /> */}
                  <h1>Cohesion</h1>
              </div>
              <div class="col-xs-7 form-container">
          <div className = "homepage_info">
            <form>
                {/* Login */}
             <h4>Login</h4>
             <input onChange={this.getUsername} class="login-button" id='login_input' type="text" name="name" placeholder="ENTER USERNAME"/>
              <button className="home_btns" type="submit" value="Submit" >Submit</button>



                 {/* Sign Up */}
                 <h2>Not registered yet?</h2>
                     <Link to="/signup">
                         <button className="home_btns">Signup</button>
                     </Link>


          </form>
          </div>
          </div>
          </div>
        </div>
)}


}

export default HomePage;
