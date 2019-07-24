import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => (
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
  );

export default HomePage;
