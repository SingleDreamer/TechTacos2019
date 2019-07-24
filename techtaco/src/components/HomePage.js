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
    const input_username = e.target.elements.name.value;
    console.log(input_username);

  }

render () {
//const HomePage = props => (
return (
  <div className = "homepage_info">
    <form>
        {/* Login */}
     <h4>Login</h4>
     <input class="login-button" id='login_input' type="text" name="name" placeholder="ENTER USERNAME"/>
             <Link to="/profiles">
                 <button className="home_btns">Submit</button>
             </Link>

         {/* Sign Up */}
         <h2>Not registered yet?</h2>
             <Link to="/signup">
                 <button className="home_btns">Signup</button>
             </Link>
  </form>
  </div>
)}


}

export default HomePage;
